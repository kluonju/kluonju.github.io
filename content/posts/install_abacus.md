---
draft: true
---

# without using ELPA 
cmake ..   -D CMAKE_CXX_COMPILER=icpx -D MPI_CXX_COMPILER=mpiicpc  -DCMAKE_INSTALL_PREFIX=/opt/abacus/3.5.4  -D USE_ELPA=OFF  -D Libxc_DIR=/opt/libxc/6.2.2/



Currently Loaded Modulefiles:
 1) gcc/14.2.0   2) aocl/5.0.0   3) mpi/openmpi/4.1.0-gcc14.2.0   4) fftw/3.3.10-gcc-14.2   5) scalapack/2.2.0-gcc-14.2

```
source /public1/soft/modules/module.sh 
module load  gcc/14.2.0   aocl/5.0.0   mpi/openmpi/4.1.0-gcc14.2.0    fftw/3.3.10-gcc-14.2   scalapack/2.2.0-gcc-14.2
```

```
cmake .. -D USE_ELPA=OFF -D FFTW3_INCLUDE_DIR=/public1/soft/fftw/3.3.10-gcc-14.2/include/ -D FFTW3_LIBRARY=/public1/soft/fftw/3.3.10-gcc-14.2/lib/ -D FFTW3_FLOAT_LIBRARY=/public1/soft/fftw/3.3.10-gcc-14.2/lib/ -D ScaLAPACK_LIBRARY=/public1/soft/scalapack/2.2.0-gcc-14.2/lib -D DeePMD_DIR=/public1/home/a8s000527/soft/deepmd-kit

```


```
$ cat toolchain/toolchain_gcc-aocl.sh 
#!/bin/bash
#SBATCH -J install
#SBATCH -N 1
#SBATCH -n 16
#SBATCH -o compile.log
#SBATCH -e compile.err

# JamesMisaka in 2025-05-05
# install abacus dependency by gcc-aocl toolchain
# openmpi is recommended to use
# libtorch and libnpy are for deepks support, which can be =no
# if you want to run EXX calculation, you should set --with-libri=install

# gpu-lcao supporting modify: CUDA_PATH and --enable-cuda
# export CUDA_PATH=/usr/local/cuda

./install_abacus_toolchain.sh \
--with-gcc=system \
--math-mode=aocl \
--with-amd=no \
--with-intel=no \
--with-openmpi=install \
--with-cmake=install \
--with-scalapack=system \
--with-libxc=install \
--with-fftw=system \
--with-elpa=no \
--with-cereal=install \
--with-rapidjson=install \
--with-libtorch=no \
--with-libnpy=no \
--with-libri=no \
--with-libcomm=no \
--with-4th-openmpi=no \
| tee compile.log
# to use openmpi-version4: set --with-4th-openmpi=yes
```

```
$ cat toolchain/build_abacus_gcc-aocl.sh 
#!/bin/bash
#SBATCH -J build
#SBATCH -N 1
#SBATCH -n 16
#SBATCH -o install.log
#SBATCH -e install.err
# JamesMisaka in 2025.03.09

# Build ABACUS by amd-openmpi toolchain

# module load openmpi aocc aocl

ABACUS_DIR=..
TOOL=$(pwd)
INSTALL_DIR=$TOOL/install
source $INSTALL_DIR/setup
cd $ABACUS_DIR
ABACUS_DIR=$(pwd)
#AOCLhome=/opt/aocl-linux-aocc-5.0.0/5.0.0/aocl/  # user should specify this parameter
AOCLhome=/public1/soft/fftw/3.3.10-gcc-14.2 # user should specify this parameter

BUILD_DIR=build_abacus_aocl
rm -rf $BUILD_DIR

PREFIX=$ABACUS_DIR
ELPA=$INSTALL_DIR/elpa-2025.01.001/cpu
# ELPA=$INSTALL_DIR/elpa-2025.01.001/nvidia # for gpu-lcao
CEREAL=$INSTALL_DIR/cereal-master/include/cereal
LIBXC=$INSTALL_DIR/libxc-7.0.0
RAPIDJSON=$INSTALL_DIR/rapidjson-master/
LAPACK=$AOCLhome/lib
SCALAPACK=$AOCLhome/lib
FFTW3=$AOCLhome
# LIBRI=$INSTALL_DIR/LibRI-0.2.1.0
# LIBCOMM=$INSTALL_DIR/LibComm-master
# LIBTORCH=$INSTALL_DIR/libtorch-2.1.2/share/cmake/Torch
# LIBNPY=$INSTALL_DIR/libnpy-1.0.1/include
# DEEPMD=$HOME/apps/anaconda3/envs/deepmd # v3.0 might have problem

# if clang++ have problem, switch back to g++

cmake -B $BUILD_DIR -DCMAKE_INSTALL_PREFIX=$PREFIX \
        -DCMAKE_CXX_COMPILER=g++ \
        -DMPI_CXX_COMPILER=mpicxx \
        -DLAPACK_DIR=$LAPACK \
        -DSCALAPACK_DIR=$SCALAPACK \
        -DFFTW3_DIR=$FFTW3 \
        -DCEREAL_INCLUDE_DIR=$CEREAL \
        -DLibxc_DIR=$LIBXC \
        -DENABLE_LCAO=ON \
        -DENABLE_LIBXC=ON \
        -DUSE_OPENMP=ON \
        -DUSE_ELPA=OFF \
        -DENABLE_RAPIDJSON=ON \
        -DRapidJSON_DIR=$RAPIDJSON \
        -DFFTW3_LIBRARY=./install/fftw-3.3.10/lib/
        #-DELPA_DIR=$ELPA \
#         -DENABLE_DEEPKS=1 \
#         -DTorch_DIR=$LIBTORCH \
#         -Dlibnpy_INCLUDE_DIR=$LIBNPY \
#         -DENABLE_LIBRI=ON \
#         -DLIBRI_DIR=$LIBRI \
#         -DLIBCOMM_DIR=$LIBCOMM \
#             -DDeePMD_DIR=$DEEPMD \
#         -DUSE_CUDA=ON \
#         -DENABLE_CUSOLVERMP=ON \
#         -D CAL_CUSOLVERMP_PATH=/opt/nvidia/hpc_sdk/Linux_x86_64/2x.xx/math_libs/1x.x/targets/x86_64-linux/lib

# if one want's to include deepmd, your system gcc version should be >= 11.3.0 for glibc requirements

cmake --build $BUILD_DIR -j `nproc` 
cmake --install $BUILD_DIR 2>/dev/null

# generate abacus_env.sh
cat << EOF > "${TOOL}/abacus_env.sh"
#!/bin/bash
source $INSTALL_DIR/setup
export PATH="${PREFIX}/bin":\${PATH}
EOF

# generate information
cat << EOF
========================== usage =========================
Done!
To use the installed ABACUS version
You need to source ${TOOL}/abacus_env.sh first !
"""
EOF
```

cmake .. -D USE_ELPA=OFF -D FFTW3_INCLUDE_DIR=/public1/soft/fftw/3.3.10-gcc-14.2/include/ -D FFTW3_FLOAT_LIBRARY=/public1/home/a8s000527/kluo/app/abacus-develop/toolchain/install/fftw-3.3.10/lib/libfftw3f.so -D FFTW3_OMP_LIBRARY=/public1/home/a8s000527/kluo/app/abacus-develop/toolchain/install/fftw-3.3.10/lib/libfftw3_omp.so -D FFTW3_LIBRARY=/public1/home/a8s000527/kluo/app/abacus-develop/toolchain/install/fftw-3.3.10/lib/libfftw3.so -D ScaLAPACK_LIBRARY=/public1/soft/scalapack/2.2.0-gcc-14.2/lib/libscalapack.so -D DeePMD_DIR=/public1/home/a8s000527/soft/deepmd-kit