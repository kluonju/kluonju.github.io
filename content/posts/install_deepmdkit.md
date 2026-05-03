---
title: "Installation of DeePMD-kit"
summary: "Installation transcript and notes for DeePMD-kit 3.1.0 on Linux."
---

kluo@local: /home/kluo/work/apps
$ bash deepmd-kit-3.1.0-cpu-Linux-x86_64.sh 

Welcome to deepmd-kit 3.1.0-cpu

In order to continue the installation process, please review the license
agreement.
Please, press ENTER to continue
>>> 
                   GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library.  A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.


Do you accept the license terms? [yes|no]
>>> yes       

deepmd-kit will now be installed into this location:
/home/kluo//deepmd-kit

  - Press ENTER to confirm the location
  - Press CTRL-C to abort the installation
  - Or specify a different location below

[/home/kluo//deepmd-kit] >>> /home/kluo/work/apps/deepmd-kit
PREFIX=/home/kluo/work/apps/deepmd-kit
Unpacking payload ...
entry_point.py:256: DeprecationWarning: Python 3.14 will, by default, filter extracted tar archives and reject files or modify their metadata. Use the filter argument to control this behavior.
entry_point.py:256: DeprecationWarning: Python 3.14 will, by default, filter extracted tar archives and reject files or modify their metadata. Use the filter argument to control this behavior.
Notes:                                                                                                                                                                       
The off-line packages and conda packages require the GNU C Library 2.17 or above[1]. The GPU version requires compatible NVIDIA driver to be installed in advance[2]. It is possible to force conda to override detection when installation[3] (such as CONDA_OVERRIDE_CUDA), but these requirements are still necessary during runtime.

[1] The GNU C Library. https://www.gnu.org/software/libc/
[2] Minor Version Compatibility. NVIDIA Data Center GPU Driver Documentation. https://docs.nvidia.com/deploy/cuda-compatibility/index.html#minor-version-compatibility
[3] Overriding detected packages. conda documentation. https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-virtual.html#overriding-detected-packages


Installing base environment...


Downloading and Extracting Packages:


## Package Plan ##

  environment location: /home/kluo/work/apps/deepmd-kit

  added / updated specs:
    - conda-forge/linux-64::_openmp_mutex==4.5=3_kmp_llvm[md5=ee5c2118262e30b972bc0b4db8ef0ba5]
    - conda-forge/linux-64::aom==3.9.1=hac33072_0[md5=346722a0be40f6edc53f12640d301338]
    - conda-forge/linux-64::attr==2.5.1=h166bdaf_1[md5=d9c69a24ad678ffce24c6543a0176b00]
    - conda-forge/linux-64::binutils_impl_linux-64==2.43=h4bf12b8_4[md5=ef67db625ad0d2dce398837102f875ed]
    - conda-forge/linux-64::binutils_linux-64==2.43=h4852527_4[md5=c87e146f5b685672d4aa6b527c6d3b5e]
    - conda-forge/linux-64::blosc==1.21.6=he440d0b_1[md5=2c2fae981fd2afd00812c92ac47d023d]
    - conda-forge/linux-64::brotli-bin==1.1.0=hb9d3cd8_3[md5=58178ef8ba927229fba6d84abf62c108]
    - conda-forge/linux-64::brotli-python==1.1.0=py312h2ec8cdc_3[md5=a32e0c069f6c3dcac635f7b0b0dac67e]
    - conda-forge/linux-64::brotli==1.1.0=hb9d3cd8_3[md5=5d08a0ac29e6a5a984817584775d4131]
    - conda-forge/linux-64::bzip2==1.0.8=h4bc722e_7[md5=62ee74e96c5ebb0af99386de58cf9553]
    - conda-forge/linux-64::c-ares==1.34.5=hb9d3cd8_0[md5=f7f0d6cc2dc986d42ac2689ec88192be]
    - conda-forge/linux-64::cffi==1.17.1=py312h06ac9bb_0[md5=a861504bbea4161a9170b85d4d2be840]
    - conda-forge/linux-64::cmake==4.0.2=h74e3db0_0[md5=9a7fc62c87b01e48f76d1850f1945859]
    - conda-forge/linux-64::conda==25.5.1=py312h7900ff3_0[md5=72a0d0e86336e7c734389d4995e50265]
    - conda-forge/linux-64::contourpy==1.3.2=py312h68727a3_0[md5=e688276449452cdfe9f8f5d3e74c23f6]
    - conda-forge/linux-64::cpp-expected==1.1.0=hff21bea_1[md5=54e8e1a8144fd678c5d43905e3ba684d]
    - conda-forge/linux-64::dav1d==1.2.1=hd590300_0[md5=418c6ca5929a611cbd69204907a83995]
    - conda-forge/linux-64::deepmd-kit==3.1.0=cpu_py312hdc6c0d3_mpi_mpich_0[md5=daa09543bb273cf209a2952a838cc4d3]
    - conda-forge/linux-64::fftw==3.3.10=mpi_mpich_hbcf76dd_10[md5=c23380b70f54c8d1194ad88614da7961]
    - conda-forge/linux-64::flatbuffers==24.12.23=h8f4948b_0[md5=db383f9fb349481841ed26f18d790058]
    - conda-forge/linux-64::fmt==11.1.4=h07f6e7f_1[md5=288a90e722fd7377448b00b2cddcb90d]
    - conda-forge/linux-64::fonttools==4.58.2=py312h178313f_0[md5=286068e5706fa6eacce413a594cf0d4b]
    - conda-forge/linux-64::freetype==2.13.3=ha770c72_1[md5=9ccd736d31e0c6e41f54e704e5312811]
    - conda-forge/linux-64::frozendict==2.4.6=py312h66e93f0_0[md5=9fa8408745a0621314b7751d11fecc18]
    - conda-forge/linux-64::gawk==5.3.1=hcd3d067_0[md5=91d4414ab699180b2b0b10b8112c5a2f]
    - conda-forge/linux-64::gcc_impl_linux-64==13.3.0=h1e990d8_2[md5=f46cf0acdcb6019397d37df1e407ab91]
    - conda-forge/linux-64::gcc_linux-64==13.3.0=h6f18a23_11[md5=639ef869618e311eee4888fcb40747e2]
    - conda-forge/linux-64::gfortran_impl_linux-64==13.3.0=h84c1745_2[md5=4e21ed177b76537067736f20f54fee0a]
    - conda-forge/linux-64::gfortran_linux-64==13.3.0=h1917dac_11[md5=85b2fa3c287710011199f5da1bac5b43]
    - conda-forge/linux-64::giflib==5.2.2=hd590300_0[md5=3bf7b9fd5a7136126e0234db4b87c8b6]
    - conda-forge/linux-64::gmp==6.3.0=hac33072_2[md5=c94a5994ef49749880a8139cf9afcbe1]
    - conda-forge/linux-64::gmpy2==2.2.1=py312h7201bc8_0[md5=c539cba0be444c6cefcb853987187d9e]
    - conda-forge/linux-64::greenlet==3.2.3=py312h2ec8cdc_0[md5=78380a74e2375eb8244290e181b2738b]
    - conda-forge/linux-64::grpcio==1.67.1=py312hacea422_2[md5=f15344009e4ae0f5e325e7027f8b5f00]
    - conda-forge/linux-64::gsl==2.7=he838d99_0[md5=fec079ba39c9cca093bf4c00001825de]
    - conda-forge/linux-64::gxx_impl_linux-64==13.3.0=hae580e1_2[md5=b55f02540605c322a47719029f8404cc]
    - conda-forge/linux-64::gxx_linux-64==13.3.0=hb14504d_11[md5=2ca7575e4f2da39c5ee260e022ab1a6f]
    - conda-forge/linux-64::h5py==3.13.0=nompi_py312hedeef09_100[md5=ed73cf6f5e1ce5e823e6efcf54cbdc51]
    - conda-forge/linux-64::hdf4==4.2.15=h2a13503_7[md5=bd77f8da987968ec3927990495dc22e4]
    - conda-forge/linux-64::hdf5==1.14.3=mpi_mpich_h7f58efa_9[md5=a51d78bcf5894aa3986f1fdeca19eec9]
    - conda-forge/linux-64::horovod==0.28.1=cpu_mpi_mpich_h0a7ad20_10[md5=51de97bdeba7b7877aeeec105a15dff4]
    - conda-forge/linux-64::icu==75.1=he02047a_0[md5=8b189310083baabfb622af68fd9d3ae3]
    - conda-forge/linux-64::jaxlib==0.5.0=cpu_py312h608a18e_0[md5=b6312595c5228eb80be4872c13f85071]
    - conda-forge/linux-64::jsonpointer==3.0.0=py312h7900ff3_1[md5=6b51f7459ea4073eeb5057207e2e1e3d]
    - conda-forge/linux-64::keyutils==1.6.1=h166bdaf_0[md5=30186d27e2c9fa62b45fb1476b7200e3]
    - conda-forge/linux-64::kim-api==2.4.1=hb61eb52_0[md5=00bf9b1561308611ee1fe684f140f1de]
    - conda-forge/linux-64::kiwisolver==1.4.8=py312h84d6215_0[md5=6713467dc95509683bfa3aca08524e8a]
    - conda-forge/linux-64::krb5==1.21.3=h659f571_0[md5=3f43953b7d3fb3aaa1d0d0723d91e368]
    - conda-forge/linux-64::lammps==2024.08.29=cpu_py312_h9db3d7d_mpi_mpich_0[md5=d95ab0af655c81d79c0ab00d55f6b0af]
    - conda-forge/linux-64::lcms2==2.17=h717163a_0[md5=000e85703f0fd9594c81710dd5066471]
    - conda-forge/linux-64::ld_impl_linux-64==2.43=h712a8e2_4[md5=01f8d123c96816249efd255a31ad7712]
    - conda-forge/linux-64::lerc==4.0.0=h0aef613_1[md5=9344155d33912347b37f0ae6c410a835]
    - conda-forge/linux-64::libabseil==20240722.0=cxx17_hbbce691_4[md5=488f260ccda0afaf08acb286db439c2f]
    - conda-forge/linux-64::libaec==1.1.3=h59595ed_0[md5=5e97e271911b8b2001a8b71860c32faa]
    - conda-forge/linux-64::libarchive==3.8.1=gpl_h98cc613_100[md5=9de6247361e1ee216b09cfb8b856e2ee]
    - conda-forge/linux-64::libasprintf==0.24.1=h8e693c7_0[md5=57566a81dd1e5aa3d98ac7582e8bfe03]
    - conda-forge/linux-64::libavif16==1.3.0=h766b0b6_0[md5=f17f2d0e5c9ad6b958547fd67b155771]
    - conda-forge/linux-64::libblas==3.9.0=31_hfdb39a5_mkl[md5=bdf4a57254e8248222cb631db4393ff1]
    - conda-forge/linux-64::libbrotlicommon==1.1.0=hb9d3cd8_3[md5=cb98af5db26e3f482bebb80ce9d947d3]
    - conda-forge/linux-64::libbrotlidec==1.1.0=hb9d3cd8_3[md5=1c6eecffad553bde44c5238770cfb7da]
    - conda-forge/linux-64::libbrotlienc==1.1.0=hb9d3cd8_3[md5=3facafe58f3858eb95527c7d3a3fc578]
    - conda-forge/linux-64::libcap==2.75=h39aace5_0[md5=c44c16d6976d2aebbd65894d7741e67e]
    - conda-forge/linux-64::libcblas==3.9.0=31_h372d94f_mkl[md5=2a06a6c16b45bd3d10002927ca204b67]
    - conda-forge/linux-64::libcurl==8.14.1=h332b0f4_0[md5=45f6713cb00f124af300342512219182]
    - conda-forge/linux-64::libdeflate==1.24=h86f0d12_0[md5=64f0c503da58ec25ebd359e4d990afa8]
    - conda-forge/linux-64::libedit==3.1.20250104=pl5321h7949ede_0[md5=c277e0a4d549b03ac1e9d6cbbe3d017b]
    - conda-forge/linux-64::libev==4.33=hd590300_2[md5=172bf1cd1ff8629f2b1179945ed45055]
    - conda-forge/linux-64::libexpat==2.7.0=h5888daf_0[md5=db0bfbe7dd197b68ad5f30333bae6ce0]
    - conda-forge/linux-64::libfabric1==2.1.0=hf45584d_1[md5=8530ead81bc02442ce5fe2c07deb85ea]
    - conda-forge/linux-64::libfabric==2.1.0=ha770c72_1[md5=a3419b2895a32e0748a254be58efb7a8]
    - conda-forge/linux-64::libffi==3.4.6=h2dba641_1[md5=ede4673863426c0883c0063d853bbd85]
    - conda-forge/linux-64::libfreetype6==2.13.3=h48d6fc4_1[md5=3c255be50a506c50765a93a6644f32fe]
    - conda-forge/linux-64::libfreetype==2.13.3=ha770c72_1[md5=51f5be229d83ecd401fb369ab96ae669]
    - conda-forge/linux-64::libgcc-ng==15.1.0=h69a702a_2[md5=ddca86c7040dd0e73b2b69bd7833d225]
    - conda-forge/linux-64::libgcc==15.1.0=h767d61c_2[md5=ea8ac52380885ed41c1baa8f1d6d2b93]
    - conda-forge/linux-64::libgcrypt-lib==1.11.1=hb9d3cd8_0[md5=8504a291085c9fb809b66cabd5834307]
    - conda-forge/linux-64::libgettextpo==0.24.1=h5888daf_0[md5=2ee6d71b72f75d50581f2f68e965efdb]
    - conda-forge/linux-64::libgfortran-ng==15.1.0=h69a702a_2[md5=a483a87b71e974bb75d1b9413d4436dd]
    - conda-forge/linux-64::libgfortran5==15.1.0=hcea5267_2[md5=01de444988ed960031dbe84cf4f9b1fc]
    - conda-forge/linux-64::libgfortran==15.1.0=h69a702a_2[md5=f92e6e0a3c0c0c85561ef61aa59d555d]
    - conda-forge/linux-64::libgomp==15.1.0=h767d61c_2[md5=fbe7d535ff9d3a168c148e07358cd5b1]
    - conda-forge/linux-64::libgpg-error==1.55=h3f2d84a_0[md5=2bd47db5807daade8500ed7ca4c512a4]
    - conda-forge/linux-64::libgrpc==1.67.1=h25350d4_2[md5=bfcedaf5f9b003029cc6abe9431f66bf]
    - conda-forge/linux-64::libhwloc==2.11.2=default_h0d58e46_1001[md5=804ca9e91bcaea0824a341d55b1684f2]
    - conda-forge/linux-64::libiconv==1.18=h4ce23a2_1[md5=e796ff8ddc598affdf7c173d6145f087]
    - conda-forge/linux-64::libidn2==2.3.8=ha4ef2c3_0[md5=e155d7130e134619e41dc21276ed6ab5]
    - conda-forge/linux-64::libjpeg-turbo==3.1.0=hb9d3cd8_0[md5=9fa334557db9f63da6c9285fd2a48638]
    - conda-forge/linux-64::liblapack==3.9.0=31_hc41d3b0_mkl[md5=10d012ddd7cc1c7ff9093d4974a34e53]
    - conda-forge/linux-64::liblzma==5.8.1=hb9d3cd8_2[md5=1a580f7796c7bf6393fddb8bbbde58dc]
    - conda-forge/linux-64::libmamba==2.2.0=he7b76cf_1[md5=53b27553b59fe2ac0336aed6ec8f3527]
    - conda-forge/linux-64::libmambapy==2.2.0=py312h14ac182_1[md5=72377710c2a317605d0e162e9ed84fbe]
    - conda-forge/linux-64::libnetcdf==4.9.2=mpi_mpich_h761946e_14[md5=ac6ab66e2aebf2964efe4228e98d4c31]
    - conda-forge/linux-64::libnghttp2==1.64.0=h161d5f1_0[md5=19e57602824042dfd0446292ef90488b]
    - conda-forge/linux-64::libnl==3.11.0=hb9d3cd8_0[md5=db63358239cbe1ff86242406d440e44a]
    - conda-forge/linux-64::libnsl==2.0.1=hd590300_0[md5=30fd6e37fe21f86f4bd26d6ee73eeec7]
    - conda-forge/linux-64::libpnetcdf==1.13.0=mpi_mpich_hdce4f7b_101[md5=3370d44f463b19dd4eeecc6986d6fbd1]
    - conda-forge/linux-64::libpng==1.6.47=h943b412_0[md5=55199e2ae2c3651f6f9b2a447b47bdc9]
    - conda-forge/linux-64::libprotobuf==5.28.3=h6128344_1[md5=d8703f1ffe5a06356f06467f1d0b9464]
    - conda-forge/linux-64::libre2-11==2024.07.02=hbbce691_2[md5=b2fede24428726dd867611664fb372e8]
    - conda-forge/linux-64::libsanitizer==13.3.0=he8ea267_2[md5=2b6cdf7bb95d3d10ef4e38ce0bc95dba]
    - conda-forge/linux-64::libsolv==0.7.33=h7955e40_0[md5=9400594fb2639595bb20a7e723d347f0]
    - conda-forge/linux-64::libsqlite==3.50.1=hee588c1_0[md5=96a7e36bff29f1d0ddf5b771e0da373a]
    - conda-forge/linux-64::libssh2==1.11.1=hcf80075_0[md5=eecce068c7e4eddeb169591baac20ac4]
    - conda-forge/linux-64::libstdcxx-ng==15.1.0=h4852527_2[md5=9d2072af184b5caa29492bf2344597bb]
    - conda-forge/linux-64::libstdcxx==15.1.0=h8f9b012_2[md5=1cb1c67961f6dd257eae9e9691b341aa]
    - conda-forge/linux-64::libsystemd0==257.6=h4e0b6ca_0[md5=071409970083d0f99ab7b569352771c9]
    - conda-forge/linux-64::libtiff==4.7.0=hf01ce69_5[md5=e79a094918988bb1807462cd42c83962]
    - conda-forge/linux-64::libtorch==2.6.0=cpu_mkl_hc5f969b_101[md5=284859a044d1c9b9e1c0a29cee771305]
    - conda-forge/linux-64::libudev1==257.6=hbe16f8c_0[md5=2ddf4d040b58018f8ba3dfd464837827]
    - conda-forge/linux-64::libunistring==0.9.10=h7f98852_0[md5=7245a044b4a1980ed83196176b78b73a]
    - conda-forge/linux-64::libuuid==2.38.1=h0b41bf4_0[md5=40b61aab5c7ba9ff276c41cfffe6b80b]
    - conda-forge/linux-64::libuv==1.51.0=hb9d3cd8_0[md5=1349c022c92c5efd3fd705a79a5804d8]
    - conda-forge/linux-64::libwebp-base==1.5.0=h851e524_0[md5=63f790534398730f59e1b899c3644d4a]
    - conda-forge/linux-64::libxcb==1.17.0=h8a09558_0[md5=92ed62436b625154323d40d5f2f11dd7]
    - conda-forge/linux-64::libxcrypt==4.4.36=hd590300_1[md5=5aa797f8787fe7a17d1b0821485b5adc]
    - conda-forge/linux-64::libxml2==2.13.8=h4bc477f_0[md5=14dbe05b929e329dbaa6f2d0aa19466d]
    - conda-forge/linux-64::libzip==1.11.2=h6991a6a_0[md5=a7b27c075c9b7f459f1c022090697cba]
    - conda-forge/linux-64::libzlib==1.3.1=hb9d3cd8_2[md5=edb0dca6bc32e4f4789199455a1dbeb8]
    - conda-forge/linux-64::llvm-openmp==20.1.6=h024ca30_0[md5=e4ece7ed81e43ae97a3b58ac4230c3c5]
    - conda-forge/linux-64::lz4-c==1.10.0=h5888daf_1[md5=9de5350a85c4a20c685259b889aa6393]
    - conda-forge/linux-64::lzo==2.10=hd590300_1001[md5=ec7398d21e2651e0dcb0044d03b9a339]
    - conda-forge/linux-64::make==4.4.1=hb9d3cd8_2[md5=33405d2a66b1411db9f7242c8b97c9e7]
    - conda-forge/linux-64::markupsafe==3.0.2=py312h178313f_1[md5=eb227c3e0bf58f5bd69c0532b157975b]
    - conda-forge/linux-64::matplotlib-base==3.10.3=py312hd3ec401_0[md5=2d69618b52d70970c81cc598e4b51118]
    - conda-forge/linux-64::menuinst==2.2.0=py312h7900ff3_0[md5=f22f8e77b36e67297feffe03eefd5375]
    - conda-forge/linux-64::mkl==2024.2.2=ha957f24_16[md5=1459379c79dda834673426504d52b319]
    - conda-forge/linux-64::ml_dtypes==0.4.0=py312hf9745cd_2[md5=c070bbf2a3c9e2e6d2c64b219e2e78da]
    - conda-forge/linux-64::mlip==3.0=mpi_mpich_h2d0be22_2[md5=73bc076a8d0fef68fabe0ef34fe1ec68]
    - conda-forge/linux-64::mpc==1.3.1=h24ddda3_1[md5=aa14b9a5196a6d8dd364164b7ce56acf]
    - conda-forge/linux-64::mpfr==4.2.1=h90cbb55_3[md5=2eeb50cab6652538eee8fc0bc3340c81]
    - conda-forge/linux-64::mpi4py==4.0.3=py312hcfe685a_101[md5=08115b3b1458ba0e84d7b781e7ff3038]
    - conda-forge/linux-64::mpich==4.3.0=h1a8bee6_100[md5=5184f66a5a8226d84a9f2935b5096d52]
    - conda-forge/linux-64::msgpack-python==1.1.0=py312h68727a3_0[md5=5c9b020a3f86799cdc6115e55df06146]
    - conda-forge/linux-64::n2p2==2.2.0=mpi_mpich_py312_h6439bc2_106[md5=cd4e67fe3525d2674c851f37ca474d77]
    - conda-forge/linux-64::ncurses==6.5=h2d0b736_3[md5=47e340acb35de30501a76c7c799c41d7]
    - conda-forge/linux-64::nlohmann_json==3.11.3=he02047a_1[md5=e46f7ac4917215b49df2ea09a694a3fa]
    - conda-forge/linux-64::numpy==1.26.4=py312heda63a1_0[md5=d8285bea2a350f63fab23bf460221f3f]
    - conda-forge/linux-64::openjpeg==2.5.3=h5fbd93e_0[md5=9e5816bc95d285c115a3ebc2f8563564]
    - conda-forge/linux-64::openssl==3.5.0=h7b32b05_1[md5=de356753cfdbffcde5bb1e86e3aa6cd0]
    - conda-forge/linux-64::optree==0.16.0=py312h68727a3_0[md5=0d981a6b5671f1013ff2e682fee925c2]
    - conda-forge/linux-64::pandas==2.3.0=py312hf9745cd_0[md5=ac82ac336dbe61106e21fb2e11704459]
    - conda-forge/linux-64::pillow==11.2.1=py312h80c1187_0[md5=ca438bf57e4f2423d261987fe423a0dd]
    - conda-forge/linux-64::pkg-config==0.29.2=h4bc722e_1009[md5=1bee70681f504ea424fb07cdb090c001]
    - conda-forge/linux-64::plumed==2.9.2=mpi_mpich_h09f1fce_0[md5=413a53b63c4cb7f0b0e682ec6cb5bea9]
    - conda-forge/linux-64::protobuf==5.28.3=py312h2ec8cdc_0[md5=9d7e427d159c1b2d516cc047ff177c48]
    - conda-forge/linux-64::psutil==7.0.0=py312h66e93f0_0[md5=8e30db4239508a538e4a3b3cdf5b9616]
    - conda-forge/linux-64::pthread-stubs==0.4=hb9d3cd8_1002[md5=b3c17d95b5a10c6e64a21fa17573e70e]
    - conda-forge/linux-64::pycosat==0.6.6=py312h66e93f0_2[md5=08223e6a73e0bca5ade16ec4cebebf23]
    - conda-forge/linux-64::pydantic-core==2.33.2=py312h680f630_0[md5=cfbd96e5a0182dfb4110fc42dda63e57]
    - conda-forge/linux-64::python==3.12.11=h9e4cc4f_0_cpython[md5=94206474a5608243a10c92cefbe0908f]
    - conda-forge/linux-64::pytorch==2.6.0=cpu_mkl_py312_h446997d_101[md5=47d470ce7ceb3775d3f1a4c00ecef44d]
    - conda-forge/linux-64::pyyaml==6.0.2=py312h178313f_2[md5=cf2485f39740de96e2a7f2bb18ed2fee]
    - conda-forge/linux-64::qhull==2020.2=h434a139_5[md5=353823361b1d27eb3960efb076dfcaf6]
    - conda-forge/linux-64::rav1e==0.7.1=h8fae777_3[md5=2c42649888aac645608191ffdc80d13a]
    - conda-forge/linux-64::rdma-core==57.0=h5888daf_0[md5=e5be997517f19a365b8b111b888be426]
    - conda-forge/linux-64::re2==2024.07.02=h9925aae_2[md5=e84ddf12bde691e8ec894b00ea829ddf]
    - conda-forge/linux-64::readline==8.2=h8c095d6_2[md5=283b96675859b20a825f8fa30f311446]
    - conda-forge/linux-64::reproc-cpp==14.2.5.post0=h5888daf_0[md5=828302fca535f9cfeb598d5f7c204323]
    - conda-forge/linux-64::reproc==14.2.5.post0=hb9d3cd8_0[md5=69fbc0a9e42eb5fe6733d2d60d818822]
    - conda-forge/linux-64::rhash==1.4.6=hb9d3cd8_1[md5=c1c9b02933fdb2cfb791d936c20e887e]
    - conda-forge/linux-64::ruamel.yaml.clib==0.2.8=py312h66e93f0_1[md5=532c3e5d0280be4fea52396ec1fa7d5d]
    - conda-forge/linux-64::ruamel.yaml==0.18.14=py312h66e93f0_0[md5=ebef257605116235f5feac68640b44ca]
    - conda-forge/linux-64::scipy==1.15.2=py312ha707e6e_0[md5=00b999c5f9d01fb633db819d79186bd4]
    - conda-forge/linux-64::simdjson==3.13.0=h84d6215_0[md5=f2d511bfca0cc4acca4bb40cd1905dff]
    - conda-forge/linux-64::sleef==3.8=h1b44611_0[md5=aec4dba5d4c2924730088753f6fa164b]
    - conda-forge/linux-64::snappy==1.2.1=h8bd8927_1[md5=3b3e64af585eadfb52bb90b553db5edf]
    - conda-forge/linux-64::sqlalchemy==2.0.41=py312h66e93f0_0[md5=4e2266c17e82847dfced222aef58d3fa]
    - conda-forge/linux-64::svt-av1==3.0.2=h5888daf_0[md5=0096882bd623e6cc09e8bf920fc8fb47]
    - conda-forge/linux-64::tbb==2021.13.0=hceb3a55_1[md5=ba7726b8df7b9d34ea80e82b097a4893]
    - conda-forge/linux-64::tensorboard-data-server==0.7.0=py312hda17c39_2[md5=8f4e72393be23b3eaa7bbc3cd4a71c40]
    - conda-forge/linux-64::tensorflow-base==2.18.0=cpu_py312h099d1c6_0[md5=90302f6d1d41808be7c73f0fd3eb4303]
    - conda-forge/linux-64::tensorflow-estimator==2.18.0=cpu_py312hc0a35a6_0[md5=a5167a1ef11ed952f96bf0a60af898f5]
    - conda-forge/linux-64::tensorflow==2.18.0=cpu_py312h69ecde4_0[md5=a2192deb0165a2e7569a59c64b5be05b]
    - conda-forge/linux-64::tk==8.6.13=noxft_hd72426e_102[md5=a0116df4f4ed05c303811a837d5b39d8]
    - conda-forge/linux-64::ucx==1.18.1=h1369271_0[md5=12fbe18173d4101a610668dec0827ea4]
    - conda-forge/linux-64::unicodedata2==16.0.0=py312h66e93f0_0[md5=617f5d608ff8c28ad546e5d9671cbb95]
    - conda-forge/linux-64::voro==0.4.6=h00ab1b0_0[md5=781691f0d209a1243515301656a5ed8f]
    - conda-forge/linux-64::wget==1.21.4=hda4d442_0[md5=361e96b664eac64a33c20dfd11affbff]
    - conda-forge/linux-64::wrapt==1.17.2=py312h66e93f0_0[md5=669e63af87710f8d52fdec9d4d63b404]
    - conda-forge/linux-64::xorg-libxau==1.0.12=hb9d3cd8_0[md5=f6ebe2cb3f82ba6c057dde5d9debe4f7]
    - conda-forge/linux-64::xorg-libxdmcp==1.1.5=hb9d3cd8_0[md5=8035c64cb77ed555e3f150b7b3972480]
    - conda-forge/linux-64::xz-tools==5.8.1=hb9d3cd8_2[md5=1bad2995c8f1c8075c6c331bf96e46fb]
    - conda-forge/linux-64::yaml-cpp==0.8.0=h3f2d84a_0[md5=92b90f5f7a322e74468bb4909c7354b5]
    - conda-forge/linux-64::yaml==0.2.5=h7f98852_2[md5=4cb3ad778ec2d5a7acbdf254eb1c42ae]
    - conda-forge/linux-64::zlib==1.3.1=hb9d3cd8_2[md5=c9f075ab2f33b3bbee9e62d4ad0a6cd8]
    - conda-forge/linux-64::zstandard==0.23.0=py312h66e93f0_2[md5=630db208bc7bbb96725ce9832c7423bb]
    - conda-forge/linux-64::zstd==1.5.7=hb8e6e7a_2[md5=6432cb5d4ac0046c3ac0a8a0f95842f9]
    - conda-forge/noarch::absl-py==2.3.0=pyhd8ed1ab_0[md5=6ec4201043eb00aefffeef8fbb46444a]
    - conda-forge/noarch::annotated-types==0.7.0=pyhd8ed1ab_1[md5=2934f256a8acfe48f6ebb4fce6cde29c]
    - conda-forge/noarch::archspec==0.2.5=pyhd8ed1ab_0[md5=845b38297fca2f2d18a29748e2ece7fa]
    - conda-forge/noarch::array-api-compat==1.12.0=pyhe01879c_0[md5=b656a1f58a53e7b6f5d4588d9b19e7b0]
    - conda-forge/noarch::astunparse==1.6.3=pyhd8ed1ab_3[md5=d3f195dfdbbf736e4ec178bbec2a975c]
    - conda-forge/noarch::boltons==24.0.0=pyhd8ed1ab_1[md5=d88c38e66d85ecc9c7e2c4110676bbf4]
    - conda-forge/noarch::bracex==2.2.1=pyhd8ed1ab_0[md5=586272349d7bef5b1ef527b56dca73cb]
    - conda-forge/noarch::ca-certificates==2025.4.26=hbd8a1cb_0[md5=95db94f75ba080a22eb623590993167b]
    - conda-forge/noarch::cached-property==1.5.2=hd8ed1ab_1[md5=9b347a7ec10940d3f7941ff6c460b551]
    - conda-forge/noarch::cached_property==1.5.2=pyha770c72_1[md5=576d629e47797577ab0f1b351297ef4a]
    - conda-forge/noarch::certifi==2025.4.26=pyhd8ed1ab_0[md5=c33eeaaa33f45031be34cda513df39b6]
    - conda-forge/noarch::charset-normalizer==3.4.2=pyhd8ed1ab_0[md5=40fe4284b8b5835a9073a645139f35af]
    - conda-forge/noarch::chex==0.1.88=pyhd8ed1ab_1[md5=a17935da351549d046aebab3720b11e5]
    - conda-forge/noarch::cloudpickle==3.1.1=pyhd8ed1ab_0[md5=364ba6c9fb03886ac979b482f39ebb92]
    - conda-forge/noarch::colorama==0.4.6=pyhd8ed1ab_1[md5=962b9857ee8e7018c22f2776ffa0b2d7]
    - conda-forge/noarch::conda-libmamba-solver==25.4.0=pyhd8ed1ab_0[md5=d62b8f745ff471d5594ad73605cb9b59]
    - conda-forge/noarch::conda-package-handling==2.4.0=pyh7900ff3_2[md5=32c158f481b4fd7630c565030f7bc482]
    - conda-forge/noarch::conda-package-streaming==0.11.0=pyhd8ed1ab_1[md5=027138b89fbe94c3870eee49bb2e1da6]
    - conda-forge/noarch::cpython==3.12.11=py312hd8ed1ab_0[md5=e5279009e7a7f7edd3cd2880c502b3cc]
    - conda-forge/noarch::cycler==0.12.1=pyhd8ed1ab_1[md5=44600c4667a319d67dbe0681fc0bc833]
    - conda-forge/noarch::dargs==0.4.10=pyhd8ed1ab_1[md5=ad59e45f309a9729768db4c1dfb606cd]
    - conda-forge/noarch::deprecated==1.2.18=pyhd8ed1ab_0[md5=0cef44b1754ae4d6924ac0eef6b9fdbe]
    - conda-forge/noarch::distro==1.9.0=pyhd8ed1ab_1[md5=0a2014fd9860f8b1eaa0b1f3d3771a08]
    - conda-forge/noarch::dpdata==0.2.24=pyhd8ed1ab_0[md5=5a49cb055034af79d9272e1afbaa1cc2]
    - conda-forge/noarch::etils==1.12.2=pyhd8ed1ab_0[md5=05ecb9e7a6f7bc5319aa61866545a746]
    - conda-forge/noarch::filelock==3.18.0=pyhd8ed1ab_0[md5=4547b39256e296bb758166893e909a7c]
    - conda-forge/noarch::flax==0.10.2=pyhd8ed1ab_0[md5=ffa86f167c17225fcdd7a6a5352b3c57]
    - conda-forge/noarch::fsspec==2025.5.1=pyhd8ed1ab_0[md5=2d2c9ef879a7e64e2dc657b09272c2b6]
    - conda-forge/noarch::gast==0.6.0=pyhd8ed1ab_0[md5=3fb76e88cbe6f96dfdaff277268bded9]
    - conda-forge/noarch::google-pasta==0.2.0=pyhd8ed1ab_2[md5=005b9749218cb8c9e94ac2a77ca3c8c0]
    - conda-forge/noarch::h2==4.2.0=pyhd8ed1ab_0[md5=b4754fb1bdcb70c8fd54f918301582c6]
    - conda-forge/noarch::hpack==4.1.0=pyhd8ed1ab_0[md5=0a802cb9888dd14eeefc611f05c40b6e]
    - conda-forge/noarch::humanize==4.12.3=pyhd8ed1ab_0[md5=cb1cf47e9eb851362fa5686f72686e85]
    - conda-forge/noarch::hyperframe==6.1.0=pyhd8ed1ab_0[md5=8e6923fc12f1fe8f8c4e5c9f343256ac]
    - conda-forge/noarch::idna==3.10=pyhd8ed1ab_1[md5=39a4f67be3286c86d696df570b1201b7]
    - conda-forge/noarch::importlib-metadata==8.7.0=pyhe01879c_1[md5=63ccfdc3a3ce25b027b8767eb722fca8]
    - conda-forge/noarch::importlib_resources==6.5.2=pyhd8ed1ab_0[md5=c85c76dc67d75619a92f51dfbce06992]
    - conda-forge/noarch::jax==0.5.0=pyhd8ed1ab_0[md5=7e0b9879a3ca16facd1ad7b05d7f2abb]
    - conda-forge/noarch::jinja2==3.1.6=pyhd8ed1ab_0[md5=446bd6c8cb26050d528881df495ce646]
    - conda-forge/noarch::jsonpatch==1.33=pyhd8ed1ab_1[md5=cb60ae9cf02b9fcb8004dec4089e5691]
    - conda-forge/noarch::keras==3.10.0=pyh753f3f9_0[md5=9e1f77096da39525f54095edac3b2a48]
    - conda-forge/noarch::kernel-headers_linux-64==3.10.0=he073ed8_18[md5=ad8527bf134a90e1c9ed35fa0b64318c]
    - conda-forge/noarch::libgcc-devel_linux-64==13.3.0=hc03c837_102[md5=4c1d6961a6a54f602ae510d9bf31fa60]
    - conda-forge/noarch::libstdcxx-devel_linux-64==13.3.0=hc03c837_102[md5=aa38de2738c5f4a72a880e3d31ffe8b4]
    - conda-forge/noarch::markdown-it-py==3.0.0=pyhd8ed1ab_1[md5=fee3164ac23dfca50cfcc8b85ddefb81]
    - conda-forge/noarch::markdown==3.8=pyhd8ed1ab_0[md5=016103aab3842859e6702d7f8bbb0a54]
    - conda-forge/noarch::mdurl==0.1.2=pyhd8ed1ab_1[md5=592132998493b3ff25fd7479396e8351]
    - conda-forge/noarch::mendeleev==0.20.1=pyh26b27b7_1[md5=67361e60cbac7882ed716d3ea86cbde8]
    - conda-forge/noarch::monty==2025.3.3=pyhd8ed1ab_0[md5=0229880a24665ccd91b4c40688c48016]
    - conda-forge/noarch::mpi==1.0.1=mpich[md5=1052de900d672ec8b3713b8e300a8f06]
    - conda-forge/noarch::mpmath==1.3.0=pyhd8ed1ab_1[md5=3585aa87c43ab15b167b574cd73b057b]
    - conda-forge/noarch::munkres==1.1.4=pyh9f0ad1d_0[md5=2ba8498c1018c1e9c61eb99b973dfe19]
    - conda-forge/noarch::namex==0.1.0=pyhd8ed1ab_0[md5=3eb854547a0183b994431957fa0e05d2]
    - conda-forge/noarch::nest-asyncio==1.6.0=pyhd8ed1ab_1[md5=598fd7d4d0de2455fb74f56063969a97]
    - conda-forge/noarch::networkx==3.5=pyhe01879c_0[md5=16bff3d37a4f99e3aa089c36c2b8d650]
    - conda-forge/noarch::opt_einsum==3.4.0=pyhd8ed1ab_1[md5=52919815cd35c4e1a0298af658ccda04]
    - conda-forge/noarch::optax==0.2.4=pyhd8ed1ab_1[md5=e065cf62ef12a16ba0cd5926b0e72080]
    - conda-forge/noarch::orbax-checkpoint==0.6.4=pyhd8ed1ab_1[md5=ef0b84c04cca7337089f9b7ad18521ee]
    - conda-forge/noarch::packaging==25.0=pyh29332c3_1[md5=58335b26c38bf4a20f399384c33cbcf9]
    - conda-forge/noarch::pip==25.1.1=pyh8b19718_0[md5=32d0781ace05105cc99af55d36cbec7c]
    - conda-forge/noarch::platformdirs==4.3.8=pyhe01879c_0[md5=424844562f5d337077b445ec6b1398a7]
    - conda-forge/noarch::pluggy==1.6.0=pyhd8ed1ab_0[md5=7da7ccd349dbf6487a7778579d2bb971]
    - conda-forge/noarch::pybind11-abi==4=hd8ed1ab_3[md5=878f923dd6acc8aeb47a75da6c4098be]
    - conda-forge/noarch::pybind11-global==2.13.6=pyh217bc35_3[md5=730a5284e26d6bdb73332dafb26aec82]
    - conda-forge/noarch::pybind11==2.13.6=pyhc790b64_3[md5=1594696beebf1ecb6d29a1136f859a74]
    - conda-forge/noarch::pycparser==2.22=pyh29332c3_1[md5=12c566707c80111f9799308d9e265aef]
    - conda-forge/noarch::pydantic==2.11.4=pyh3cfb1c2_0[md5=8ad3ad8db5ce2ba470c9facc37af00a9]
    - conda-forge/noarch::pyfiglet==0.8.post1=py_0[md5=e22d3c090f24856764e9d70e76fa3a5f]
    - conda-forge/noarch::pygments==2.19.1=pyhd8ed1ab_0[md5=232fb4577b6687b2d503ef8e254270c9]
    - conda-forge/noarch::pyparsing==3.2.3=pyhd8ed1ab_1[md5=513d3c262ee49b54a8fec85c5bc99764]
    - conda-forge/noarch::pysocks==1.7.1=pyha55dd90_7[md5=461219d1a5bd61342293efa2c0c90eac]
    - conda-forge/noarch::python-dateutil==2.9.0.post0=pyhff2d567_1[md5=5ba79d7c71f03c678c8ead841f347d6e]
    - conda-forge/noarch::python-flatbuffers==25.2.10=pyhbc23db3_0[md5=2c18ee679aa838a190eeaae5a14afc9e]
    - conda-forge/noarch::python-tzdata==2025.2=pyhd8ed1ab_0[md5=88476ae6ebd24f39261e0854ac244f33]
    - conda-forge/noarch::python_abi==3.12=7_cp312[md5=0dfcdc155cf23812a0c9deada86fb723]
    - conda-forge/noarch::pytz==2025.2=pyhd8ed1ab_0[md5=bc8e3267d44011051f2eb14d22fb0960]
    - conda-forge/noarch::requests==2.32.4=pyhd8ed1ab_0[md5=f6082eae112814f1447b56a5e1f6ed05]
    - conda-forge/noarch::rich==14.0.0=pyh29332c3_0[md5=202f08242192ce3ed8bdb439ba40c0fe]
    - conda-forge/noarch::setuptools==80.9.0=pyhff2d567_0[md5=4de79c071274a53dcaf2a8c749d1499e]
    - conda-forge/noarch::six==1.17.0=pyhd8ed1ab_0[md5=a451d576819089b0d672f18768be0f65]
    - conda-forge/noarch::sympy==1.14.0=pyh2585a3b_105[md5=8c09fac3785696e1c477156192d64b91]
    - conda-forge/noarch::sysroot_linux-64==2.17=h0157908_18[md5=460eba7851277ec1fd80a1a24080787a]
    - conda-forge/noarch::tensorboard==2.18.0=pyhd8ed1ab_1[md5=90a735b377427589728e588b5241a253]
    - conda-forge/noarch::termcolor==3.1.0=pyhd8ed1ab_0[md5=951a99e94afe3d38bfdbd04902fe33b7]
    - conda-forge/noarch::toolz==1.0.0=pyhd8ed1ab_1[md5=40d0ed782a8aaa16ef248e68c06c168d]
    - conda-forge/noarch::tqdm==4.67.1=pyhd8ed1ab_1[md5=9efbfdc37242619130ea42b1cc4ed861]
    - conda-forge/noarch::truststore==0.10.1=pyh29332c3_0[md5=373a72aeffd8a5d93652ef1235062252]
    - conda-forge/noarch::typeguard==4.4.3=pyhd8ed1ab_0[md5=dda757df98b7ae2e6cb46e9650dc2240]
    - conda-forge/noarch::typing-extensions==4.14.0=h32cad80_0[md5=a1cdd40fc962e2f7944bc19e01c7e584]
    - conda-forge/noarch::typing-inspection==0.4.1=pyhd8ed1ab_0[md5=e0c3cd765dc15751ee2f0b03cd015712]
    - conda-forge/noarch::typing_extensions==4.14.0=pyhe01879c_0[md5=2adcd9bb86f656d3d43bf84af59a1faf]
    - conda-forge/noarch::tzdata==2025b=h78e105d_0[md5=4222072737ccff51314b5ece9c7d6f5a]
    - conda-forge/noarch::urllib3==2.4.0=pyhd8ed1ab_0[md5=c1e349028e0052c4eea844e94f773065]
    - conda-forge/noarch::wcmatch==10.0=pyhd8ed1ab_1[md5=6587060379c4d19e6d2766eb23a32289]
    - conda-forge/noarch::werkzeug==3.1.3=pyhd8ed1ab_1[md5=0a9b57c159d56b508613cc39022c1b9e]
    - conda-forge/noarch::wheel==0.45.1=pyhd8ed1ab_1[md5=75cb7132eb58d97896e173ef12ac9986]
    - conda-forge/noarch::zipp==3.23.0=pyhd8ed1ab_0[md5=df5e78d904988eb55042c0c97446079f]
    - njzjz/linux-64::tensorstore==0.1.65=py312h73a3014_5[md5=7f7beeae83d55c21bb26d2bfc4763291]


The following NEW packages will be INSTALLED:

  _openmp_mutex      conda-forge/linux-64::_openmp_mutex-4.5-3_kmp_llvm 
  absl-py            conda-forge/noarch::absl-py-2.3.0-pyhd8ed1ab_0 
  annotated-types    conda-forge/noarch::annotated-types-0.7.0-pyhd8ed1ab_1 
  aom                conda-forge/linux-64::aom-3.9.1-hac33072_0 
  archspec           conda-forge/noarch::archspec-0.2.5-pyhd8ed1ab_0 
  array-api-compat   conda-forge/noarch::array-api-compat-1.12.0-pyhe01879c_0 
  astunparse         conda-forge/noarch::astunparse-1.6.3-pyhd8ed1ab_3 
  attr               conda-forge/linux-64::attr-2.5.1-h166bdaf_1 
  binutils_impl_lin~ conda-forge/linux-64::binutils_impl_linux-64-2.43-h4bf12b8_4 
  binutils_linux-64  conda-forge/linux-64::binutils_linux-64-2.43-h4852527_4 
  blosc              conda-forge/linux-64::blosc-1.21.6-he440d0b_1 
  boltons            conda-forge/noarch::boltons-24.0.0-pyhd8ed1ab_1 
  bracex             conda-forge/noarch::bracex-2.2.1-pyhd8ed1ab_0 
  brotli             conda-forge/linux-64::brotli-1.1.0-hb9d3cd8_3 
  brotli-bin         conda-forge/linux-64::brotli-bin-1.1.0-hb9d3cd8_3 
  brotli-python      conda-forge/linux-64::brotli-python-1.1.0-py312h2ec8cdc_3 
  bzip2              conda-forge/linux-64::bzip2-1.0.8-h4bc722e_7 
  c-ares             conda-forge/linux-64::c-ares-1.34.5-hb9d3cd8_0 
  ca-certificates    conda-forge/noarch::ca-certificates-2025.4.26-hbd8a1cb_0 
  cached-property    conda-forge/noarch::cached-property-1.5.2-hd8ed1ab_1 
  cached_property    conda-forge/noarch::cached_property-1.5.2-pyha770c72_1 
  certifi            conda-forge/noarch::certifi-2025.4.26-pyhd8ed1ab_0 
  cffi               conda-forge/linux-64::cffi-1.17.1-py312h06ac9bb_0 
  charset-normalizer conda-forge/noarch::charset-normalizer-3.4.2-pyhd8ed1ab_0 
  chex               conda-forge/noarch::chex-0.1.88-pyhd8ed1ab_1 
  cloudpickle        conda-forge/noarch::cloudpickle-3.1.1-pyhd8ed1ab_0 
  cmake              conda-forge/linux-64::cmake-4.0.2-h74e3db0_0 
  colorama           conda-forge/noarch::colorama-0.4.6-pyhd8ed1ab_1 
  conda              conda-forge/linux-64::conda-25.5.1-py312h7900ff3_0 
  conda-libmamba-so~ conda-forge/noarch::conda-libmamba-solver-25.4.0-pyhd8ed1ab_0 
  conda-package-han~ conda-forge/noarch::conda-package-handling-2.4.0-pyh7900ff3_2 
  conda-package-str~ conda-forge/noarch::conda-package-streaming-0.11.0-pyhd8ed1ab_1 
  contourpy          conda-forge/linux-64::contourpy-1.3.2-py312h68727a3_0 
  cpp-expected       conda-forge/linux-64::cpp-expected-1.1.0-hff21bea_1 
  cpython            conda-forge/noarch::cpython-3.12.11-py312hd8ed1ab_0 
  cycler             conda-forge/noarch::cycler-0.12.1-pyhd8ed1ab_1 
  dargs              conda-forge/noarch::dargs-0.4.10-pyhd8ed1ab_1 
  dav1d              conda-forge/linux-64::dav1d-1.2.1-hd590300_0 
  deepmd-kit         conda-forge/linux-64::deepmd-kit-3.1.0-cpu_py312hdc6c0d3_mpi_mpich_0 
  deprecated         conda-forge/noarch::deprecated-1.2.18-pyhd8ed1ab_0 
  distro             conda-forge/noarch::distro-1.9.0-pyhd8ed1ab_1 
  dpdata             conda-forge/noarch::dpdata-0.2.24-pyhd8ed1ab_0 
  etils              conda-forge/noarch::etils-1.12.2-pyhd8ed1ab_0 
  fftw               conda-forge/linux-64::fftw-3.3.10-mpi_mpich_hbcf76dd_10 
  filelock           conda-forge/noarch::filelock-3.18.0-pyhd8ed1ab_0 
  flatbuffers        conda-forge/linux-64::flatbuffers-24.12.23-h8f4948b_0 
  flax               conda-forge/noarch::flax-0.10.2-pyhd8ed1ab_0 
  fmt                conda-forge/linux-64::fmt-11.1.4-h07f6e7f_1 
  fonttools          conda-forge/linux-64::fonttools-4.58.2-py312h178313f_0 
  freetype           conda-forge/linux-64::freetype-2.13.3-ha770c72_1 
  frozendict         conda-forge/linux-64::frozendict-2.4.6-py312h66e93f0_0 
  fsspec             conda-forge/noarch::fsspec-2025.5.1-pyhd8ed1ab_0 
  gast               conda-forge/noarch::gast-0.6.0-pyhd8ed1ab_0 
  gawk               conda-forge/linux-64::gawk-5.3.1-hcd3d067_0 
  gcc_impl_linux-64  conda-forge/linux-64::gcc_impl_linux-64-13.3.0-h1e990d8_2 
  gcc_linux-64       conda-forge/linux-64::gcc_linux-64-13.3.0-h6f18a23_11 
  gfortran_impl_lin~ conda-forge/linux-64::gfortran_impl_linux-64-13.3.0-h84c1745_2 
  gfortran_linux-64  conda-forge/linux-64::gfortran_linux-64-13.3.0-h1917dac_11 
  giflib             conda-forge/linux-64::giflib-5.2.2-hd590300_0 
  gmp                conda-forge/linux-64::gmp-6.3.0-hac33072_2 
  gmpy2              conda-forge/linux-64::gmpy2-2.2.1-py312h7201bc8_0 
  google-pasta       conda-forge/noarch::google-pasta-0.2.0-pyhd8ed1ab_2 
  greenlet           conda-forge/linux-64::greenlet-3.2.3-py312h2ec8cdc_0 
  grpcio             conda-forge/linux-64::grpcio-1.67.1-py312hacea422_2 
  gsl                conda-forge/linux-64::gsl-2.7-he838d99_0 
  gxx_impl_linux-64  conda-forge/linux-64::gxx_impl_linux-64-13.3.0-hae580e1_2 
  gxx_linux-64       conda-forge/linux-64::gxx_linux-64-13.3.0-hb14504d_11 
  h2                 conda-forge/noarch::h2-4.2.0-pyhd8ed1ab_0 
  h5py               conda-forge/linux-64::h5py-3.13.0-nompi_py312hedeef09_100 
  hdf4               conda-forge/linux-64::hdf4-4.2.15-h2a13503_7 
  hdf5               conda-forge/linux-64::hdf5-1.14.3-mpi_mpich_h7f58efa_9 
  horovod            conda-forge/linux-64::horovod-0.28.1-cpu_mpi_mpich_h0a7ad20_10 
  hpack              conda-forge/noarch::hpack-4.1.0-pyhd8ed1ab_0 
  humanize           conda-forge/noarch::humanize-4.12.3-pyhd8ed1ab_0 
  hyperframe         conda-forge/noarch::hyperframe-6.1.0-pyhd8ed1ab_0 
  icu                conda-forge/linux-64::icu-75.1-he02047a_0 
  idna               conda-forge/noarch::idna-3.10-pyhd8ed1ab_1 
  importlib-metadata conda-forge/noarch::importlib-metadata-8.7.0-pyhe01879c_1 
  importlib_resourc~ conda-forge/noarch::importlib_resources-6.5.2-pyhd8ed1ab_0 
  jax                conda-forge/noarch::jax-0.5.0-pyhd8ed1ab_0 
  jaxlib             conda-forge/linux-64::jaxlib-0.5.0-cpu_py312h608a18e_0 
  jinja2             conda-forge/noarch::jinja2-3.1.6-pyhd8ed1ab_0 
  jsonpatch          conda-forge/noarch::jsonpatch-1.33-pyhd8ed1ab_1 
  jsonpointer        conda-forge/linux-64::jsonpointer-3.0.0-py312h7900ff3_1 
  keras              conda-forge/noarch::keras-3.10.0-pyh753f3f9_0 
  kernel-headers_li~ conda-forge/noarch::kernel-headers_linux-64-3.10.0-he073ed8_18 
  keyutils           conda-forge/linux-64::keyutils-1.6.1-h166bdaf_0 
  kim-api            conda-forge/linux-64::kim-api-2.4.1-hb61eb52_0 
  kiwisolver         conda-forge/linux-64::kiwisolver-1.4.8-py312h84d6215_0 
  krb5               conda-forge/linux-64::krb5-1.21.3-h659f571_0 
  lammps             conda-forge/linux-64::lammps-2024.08.29-cpu_py312_h9db3d7d_mpi_mpich_0 
  lcms2              conda-forge/linux-64::lcms2-2.17-h717163a_0 
  ld_impl_linux-64   conda-forge/linux-64::ld_impl_linux-64-2.43-h712a8e2_4 
  lerc               conda-forge/linux-64::lerc-4.0.0-h0aef613_1 
  libabseil          conda-forge/linux-64::libabseil-20240722.0-cxx17_hbbce691_4 
  libaec             conda-forge/linux-64::libaec-1.1.3-h59595ed_0 
  libarchive         conda-forge/linux-64::libarchive-3.8.1-gpl_h98cc613_100 
  libasprintf        conda-forge/linux-64::libasprintf-0.24.1-h8e693c7_0 
  libavif16          conda-forge/linux-64::libavif16-1.3.0-h766b0b6_0 
  libblas            conda-forge/linux-64::libblas-3.9.0-31_hfdb39a5_mkl 
  libbrotlicommon    conda-forge/linux-64::libbrotlicommon-1.1.0-hb9d3cd8_3 
  libbrotlidec       conda-forge/linux-64::libbrotlidec-1.1.0-hb9d3cd8_3 
  libbrotlienc       conda-forge/linux-64::libbrotlienc-1.1.0-hb9d3cd8_3 
  libcap             conda-forge/linux-64::libcap-2.75-h39aace5_0 
  libcblas           conda-forge/linux-64::libcblas-3.9.0-31_h372d94f_mkl 
  libcurl            conda-forge/linux-64::libcurl-8.14.1-h332b0f4_0 
  libdeflate         conda-forge/linux-64::libdeflate-1.24-h86f0d12_0 
  libedit            conda-forge/linux-64::libedit-3.1.20250104-pl5321h7949ede_0 
  libev              conda-forge/linux-64::libev-4.33-hd590300_2 
  libexpat           conda-forge/linux-64::libexpat-2.7.0-h5888daf_0 
  libfabric          conda-forge/linux-64::libfabric-2.1.0-ha770c72_1 
  libfabric1         conda-forge/linux-64::libfabric1-2.1.0-hf45584d_1 
  libffi             conda-forge/linux-64::libffi-3.4.6-h2dba641_1 
  libfreetype        conda-forge/linux-64::libfreetype-2.13.3-ha770c72_1 
  libfreetype6       conda-forge/linux-64::libfreetype6-2.13.3-h48d6fc4_1 
  libgcc             conda-forge/linux-64::libgcc-15.1.0-h767d61c_2 
  libgcc-devel_linu~ conda-forge/noarch::libgcc-devel_linux-64-13.3.0-hc03c837_102 
  libgcc-ng          conda-forge/linux-64::libgcc-ng-15.1.0-h69a702a_2 
  libgcrypt-lib      conda-forge/linux-64::libgcrypt-lib-1.11.1-hb9d3cd8_0 
  libgettextpo       conda-forge/linux-64::libgettextpo-0.24.1-h5888daf_0 
  libgfortran        conda-forge/linux-64::libgfortran-15.1.0-h69a702a_2 
  libgfortran-ng     conda-forge/linux-64::libgfortran-ng-15.1.0-h69a702a_2 
  libgfortran5       conda-forge/linux-64::libgfortran5-15.1.0-hcea5267_2 
  libgomp            conda-forge/linux-64::libgomp-15.1.0-h767d61c_2 
  libgpg-error       conda-forge/linux-64::libgpg-error-1.55-h3f2d84a_0 
  libgrpc            conda-forge/linux-64::libgrpc-1.67.1-h25350d4_2 
  libhwloc           conda-forge/linux-64::libhwloc-2.11.2-default_h0d58e46_1001 
  libiconv           conda-forge/linux-64::libiconv-1.18-h4ce23a2_1 
  libidn2            conda-forge/linux-64::libidn2-2.3.8-ha4ef2c3_0 
  libjpeg-turbo      conda-forge/linux-64::libjpeg-turbo-3.1.0-hb9d3cd8_0 
  liblapack          conda-forge/linux-64::liblapack-3.9.0-31_hc41d3b0_mkl 
  liblzma            conda-forge/linux-64::liblzma-5.8.1-hb9d3cd8_2 
  libmamba           conda-forge/linux-64::libmamba-2.2.0-he7b76cf_1 
  libmambapy         conda-forge/linux-64::libmambapy-2.2.0-py312h14ac182_1 
  libnetcdf          conda-forge/linux-64::libnetcdf-4.9.2-mpi_mpich_h761946e_14 
  libnghttp2         conda-forge/linux-64::libnghttp2-1.64.0-h161d5f1_0 
  libnl              conda-forge/linux-64::libnl-3.11.0-hb9d3cd8_0 
  libnsl             conda-forge/linux-64::libnsl-2.0.1-hd590300_0 
  libpnetcdf         conda-forge/linux-64::libpnetcdf-1.13.0-mpi_mpich_hdce4f7b_101 
  libpng             conda-forge/linux-64::libpng-1.6.47-h943b412_0 
  libprotobuf        conda-forge/linux-64::libprotobuf-5.28.3-h6128344_1 
  libre2-11          conda-forge/linux-64::libre2-11-2024.07.02-hbbce691_2 
  libsanitizer       conda-forge/linux-64::libsanitizer-13.3.0-he8ea267_2 
  libsolv            conda-forge/linux-64::libsolv-0.7.33-h7955e40_0 
  libsqlite          conda-forge/linux-64::libsqlite-3.50.1-hee588c1_0 
  libssh2            conda-forge/linux-64::libssh2-1.11.1-hcf80075_0 
  libstdcxx          conda-forge/linux-64::libstdcxx-15.1.0-h8f9b012_2 
  libstdcxx-devel_l~ conda-forge/noarch::libstdcxx-devel_linux-64-13.3.0-hc03c837_102 
  libstdcxx-ng       conda-forge/linux-64::libstdcxx-ng-15.1.0-h4852527_2 
  libsystemd0        conda-forge/linux-64::libsystemd0-257.6-h4e0b6ca_0 
  libtiff            conda-forge/linux-64::libtiff-4.7.0-hf01ce69_5 
  libtorch           conda-forge/linux-64::libtorch-2.6.0-cpu_mkl_hc5f969b_101 
  libudev1           conda-forge/linux-64::libudev1-257.6-hbe16f8c_0 
  libunistring       conda-forge/linux-64::libunistring-0.9.10-h7f98852_0 
  libuuid            conda-forge/linux-64::libuuid-2.38.1-h0b41bf4_0 
  libuv              conda-forge/linux-64::libuv-1.51.0-hb9d3cd8_0 
  libwebp-base       conda-forge/linux-64::libwebp-base-1.5.0-h851e524_0 
  libxcb             conda-forge/linux-64::libxcb-1.17.0-h8a09558_0 
  libxcrypt          conda-forge/linux-64::libxcrypt-4.4.36-hd590300_1 
  libxml2            conda-forge/linux-64::libxml2-2.13.8-h4bc477f_0 
  libzip             conda-forge/linux-64::libzip-1.11.2-h6991a6a_0 
  libzlib            conda-forge/linux-64::libzlib-1.3.1-hb9d3cd8_2 
  llvm-openmp        conda-forge/linux-64::llvm-openmp-20.1.6-h024ca30_0 
  lz4-c              conda-forge/linux-64::lz4-c-1.10.0-h5888daf_1 
  lzo                conda-forge/linux-64::lzo-2.10-hd590300_1001 
  make               conda-forge/linux-64::make-4.4.1-hb9d3cd8_2 
  markdown           conda-forge/noarch::markdown-3.8-pyhd8ed1ab_0 
  markdown-it-py     conda-forge/noarch::markdown-it-py-3.0.0-pyhd8ed1ab_1 
  markupsafe         conda-forge/linux-64::markupsafe-3.0.2-py312h178313f_1 
  matplotlib-base    conda-forge/linux-64::matplotlib-base-3.10.3-py312hd3ec401_0 
  mdurl              conda-forge/noarch::mdurl-0.1.2-pyhd8ed1ab_1 
  mendeleev          conda-forge/noarch::mendeleev-0.20.1-pyh26b27b7_1 
  menuinst           conda-forge/linux-64::menuinst-2.2.0-py312h7900ff3_0 
  mkl                conda-forge/linux-64::mkl-2024.2.2-ha957f24_16 
  ml_dtypes          conda-forge/linux-64::ml_dtypes-0.4.0-py312hf9745cd_2 
  mlip               conda-forge/linux-64::mlip-3.0-mpi_mpich_h2d0be22_2 
  monty              conda-forge/noarch::monty-2025.3.3-pyhd8ed1ab_0 
  mpc                conda-forge/linux-64::mpc-1.3.1-h24ddda3_1 
  mpfr               conda-forge/linux-64::mpfr-4.2.1-h90cbb55_3 
  mpi                conda-forge/noarch::mpi-1.0.1-mpich 
  mpi4py             conda-forge/linux-64::mpi4py-4.0.3-py312hcfe685a_101 
  mpich              conda-forge/linux-64::mpich-4.3.0-h1a8bee6_100 
  mpmath             conda-forge/noarch::mpmath-1.3.0-pyhd8ed1ab_1 
  msgpack-python     conda-forge/linux-64::msgpack-python-1.1.0-py312h68727a3_0 
  munkres            conda-forge/noarch::munkres-1.1.4-pyh9f0ad1d_0 
  n2p2               conda-forge/linux-64::n2p2-2.2.0-mpi_mpich_py312_h6439bc2_106 
  namex              conda-forge/noarch::namex-0.1.0-pyhd8ed1ab_0 
  ncurses            conda-forge/linux-64::ncurses-6.5-h2d0b736_3 
  nest-asyncio       conda-forge/noarch::nest-asyncio-1.6.0-pyhd8ed1ab_1 
  networkx           conda-forge/noarch::networkx-3.5-pyhe01879c_0 
  nlohmann_json      conda-forge/linux-64::nlohmann_json-3.11.3-he02047a_1 
  numpy              conda-forge/linux-64::numpy-1.26.4-py312heda63a1_0 
  openjpeg           conda-forge/linux-64::openjpeg-2.5.3-h5fbd93e_0 
  openssl            conda-forge/linux-64::openssl-3.5.0-h7b32b05_1 
  opt_einsum         conda-forge/noarch::opt_einsum-3.4.0-pyhd8ed1ab_1 
  optax              conda-forge/noarch::optax-0.2.4-pyhd8ed1ab_1 
  optree             conda-forge/linux-64::optree-0.16.0-py312h68727a3_0 
  orbax-checkpoint   conda-forge/noarch::orbax-checkpoint-0.6.4-pyhd8ed1ab_1 
  packaging          conda-forge/noarch::packaging-25.0-pyh29332c3_1 
  pandas             conda-forge/linux-64::pandas-2.3.0-py312hf9745cd_0 
  pillow             conda-forge/linux-64::pillow-11.2.1-py312h80c1187_0 
  pip                conda-forge/noarch::pip-25.1.1-pyh8b19718_0 
  pkg-config         conda-forge/linux-64::pkg-config-0.29.2-h4bc722e_1009 
  platformdirs       conda-forge/noarch::platformdirs-4.3.8-pyhe01879c_0 
  pluggy             conda-forge/noarch::pluggy-1.6.0-pyhd8ed1ab_0 
  plumed             conda-forge/linux-64::plumed-2.9.2-mpi_mpich_h09f1fce_0 
  protobuf           conda-forge/linux-64::protobuf-5.28.3-py312h2ec8cdc_0 
  psutil             conda-forge/linux-64::psutil-7.0.0-py312h66e93f0_0 
  pthread-stubs      conda-forge/linux-64::pthread-stubs-0.4-hb9d3cd8_1002 
  pybind11           conda-forge/noarch::pybind11-2.13.6-pyhc790b64_3 
  pybind11-abi       conda-forge/noarch::pybind11-abi-4-hd8ed1ab_3 
  pybind11-global    conda-forge/noarch::pybind11-global-2.13.6-pyh217bc35_3 
  pycosat            conda-forge/linux-64::pycosat-0.6.6-py312h66e93f0_2 
  pycparser          conda-forge/noarch::pycparser-2.22-pyh29332c3_1 
  pydantic           conda-forge/noarch::pydantic-2.11.4-pyh3cfb1c2_0 
  pydantic-core      conda-forge/linux-64::pydantic-core-2.33.2-py312h680f630_0 
  pyfiglet           conda-forge/noarch::pyfiglet-0.8.post1-py_0 
  pygments           conda-forge/noarch::pygments-2.19.1-pyhd8ed1ab_0 
  pyparsing          conda-forge/noarch::pyparsing-3.2.3-pyhd8ed1ab_1 
  pysocks            conda-forge/noarch::pysocks-1.7.1-pyha55dd90_7 
  python             conda-forge/linux-64::python-3.12.11-h9e4cc4f_0_cpython 
  python-dateutil    conda-forge/noarch::python-dateutil-2.9.0.post0-pyhff2d567_1 
  python-flatbuffers conda-forge/noarch::python-flatbuffers-25.2.10-pyhbc23db3_0 
  python-tzdata      conda-forge/noarch::python-tzdata-2025.2-pyhd8ed1ab_0 
  python_abi         conda-forge/noarch::python_abi-3.12-7_cp312 
  pytorch            conda-forge/linux-64::pytorch-2.6.0-cpu_mkl_py312_h446997d_101 
  pytz               conda-forge/noarch::pytz-2025.2-pyhd8ed1ab_0 
  pyyaml             conda-forge/linux-64::pyyaml-6.0.2-py312h178313f_2 
  qhull              conda-forge/linux-64::qhull-2020.2-h434a139_5 
  rav1e              conda-forge/linux-64::rav1e-0.7.1-h8fae777_3 
  rdma-core          conda-forge/linux-64::rdma-core-57.0-h5888daf_0 
  re2                conda-forge/linux-64::re2-2024.07.02-h9925aae_2 
  readline           conda-forge/linux-64::readline-8.2-h8c095d6_2 
  reproc             conda-forge/linux-64::reproc-14.2.5.post0-hb9d3cd8_0 
  reproc-cpp         conda-forge/linux-64::reproc-cpp-14.2.5.post0-h5888daf_0 
  requests           conda-forge/noarch::requests-2.32.4-pyhd8ed1ab_0 
  rhash              conda-forge/linux-64::rhash-1.4.6-hb9d3cd8_1 
  rich               conda-forge/noarch::rich-14.0.0-pyh29332c3_0 
  ruamel.yaml        conda-forge/linux-64::ruamel.yaml-0.18.14-py312h66e93f0_0 
  ruamel.yaml.clib   conda-forge/linux-64::ruamel.yaml.clib-0.2.8-py312h66e93f0_1 
  scipy              conda-forge/linux-64::scipy-1.15.2-py312ha707e6e_0 
  setuptools         conda-forge/noarch::setuptools-80.9.0-pyhff2d567_0 
  simdjson           conda-forge/linux-64::simdjson-3.13.0-h84d6215_0 
  six                conda-forge/noarch::six-1.17.0-pyhd8ed1ab_0 
  sleef              conda-forge/linux-64::sleef-3.8-h1b44611_0 
  snappy             conda-forge/linux-64::snappy-1.2.1-h8bd8927_1 
  sqlalchemy         conda-forge/linux-64::sqlalchemy-2.0.41-py312h66e93f0_0 
  svt-av1            conda-forge/linux-64::svt-av1-3.0.2-h5888daf_0 
  sympy              conda-forge/noarch::sympy-1.14.0-pyh2585a3b_105 
  sysroot_linux-64   conda-forge/noarch::sysroot_linux-64-2.17-h0157908_18 
  tbb                conda-forge/linux-64::tbb-2021.13.0-hceb3a55_1 
  tensorboard        conda-forge/noarch::tensorboard-2.18.0-pyhd8ed1ab_1 
  tensorboard-data-~ conda-forge/linux-64::tensorboard-data-server-0.7.0-py312hda17c39_2 
  tensorflow         conda-forge/linux-64::tensorflow-2.18.0-cpu_py312h69ecde4_0 
  tensorflow-base    conda-forge/linux-64::tensorflow-base-2.18.0-cpu_py312h099d1c6_0 
  tensorflow-estima~ conda-forge/linux-64::tensorflow-estimator-2.18.0-cpu_py312hc0a35a6_0 
  tensorstore        njzjz/linux-64::tensorstore-0.1.65-py312h73a3014_5 
  termcolor          conda-forge/noarch::termcolor-3.1.0-pyhd8ed1ab_0 
  tk                 conda-forge/linux-64::tk-8.6.13-noxft_hd72426e_102 
  toolz              conda-forge/noarch::toolz-1.0.0-pyhd8ed1ab_1 
  tqdm               conda-forge/noarch::tqdm-4.67.1-pyhd8ed1ab_1 
  truststore         conda-forge/noarch::truststore-0.10.1-pyh29332c3_0 
  typeguard          conda-forge/noarch::typeguard-4.4.3-pyhd8ed1ab_0 
  typing-extensions  conda-forge/noarch::typing-extensions-4.14.0-h32cad80_0 
  typing-inspection  conda-forge/noarch::typing-inspection-0.4.1-pyhd8ed1ab_0 
  typing_extensions  conda-forge/noarch::typing_extensions-4.14.0-pyhe01879c_0 
  tzdata             conda-forge/noarch::tzdata-2025b-h78e105d_0 
  ucx                conda-forge/linux-64::ucx-1.18.1-h1369271_0 
  unicodedata2       conda-forge/linux-64::unicodedata2-16.0.0-py312h66e93f0_0 
  urllib3            conda-forge/noarch::urllib3-2.4.0-pyhd8ed1ab_0 
  voro               conda-forge/linux-64::voro-0.4.6-h00ab1b0_0 
  wcmatch            conda-forge/noarch::wcmatch-10.0-pyhd8ed1ab_1 
  werkzeug           conda-forge/noarch::werkzeug-3.1.3-pyhd8ed1ab_1 
  wget               conda-forge/linux-64::wget-1.21.4-hda4d442_0 
  wheel              conda-forge/noarch::wheel-0.45.1-pyhd8ed1ab_1 
  wrapt              conda-forge/linux-64::wrapt-1.17.2-py312h66e93f0_0 
  xorg-libxau        conda-forge/linux-64::xorg-libxau-1.0.12-hb9d3cd8_0 
  xorg-libxdmcp      conda-forge/linux-64::xorg-libxdmcp-1.1.5-hb9d3cd8_0 
  xz-tools           conda-forge/linux-64::xz-tools-5.8.1-hb9d3cd8_2 
  yaml               conda-forge/linux-64::yaml-0.2.5-h7f98852_2 
  yaml-cpp           conda-forge/linux-64::yaml-cpp-0.8.0-h3f2d84a_0 
  zipp               conda-forge/noarch::zipp-3.23.0-pyhd8ed1ab_0 
  zlib               conda-forge/linux-64::zlib-1.3.1-hb9d3cd8_2 
  zstandard          conda-forge/linux-64::zstandard-0.23.0-py312h66e93f0_2 
  zstd               conda-forge/linux-64::zstd-1.5.7-hb8e6e7a_2 



Downloading and Extracting Packages:

Preparing transaction: done
Executing transaction: / 
To enable CUDA support, UCX requires the CUDA Runtime library (libcudart).
The library can be installed with the appropriate command below:

* For CUDA 11, run:    conda install cudatoolkit cuda-version=11
* For CUDA 12, run:    conda install cuda-cudart cuda-version=12

If any of the packages you requested use CUDA then CUDA should already
have been installed for you.


done
entry_point.py:256: DeprecationWarning: Python 3.14 will, by default, filter extracted tar archives and reject files or modify their metadata. Use the filter argument to control this behavior.
Please activate the environment before using the packages:

source /path/to/deepmd-kit/bin/activate /path/to/deepmd-kit

This package enables TensorFlow, PyTorch, and JAX backends.

The following executable files have been installed:
1. DeePMD-kit CLi: dp -h
2. LAMMPS: lmp -h
3. DeePMD-kit i-Pi interface: dp_ipi
4. MPICH: mpirun -h
5. Horovod: horovod -h

The following Python libraries have been installed:
1. deepmd
2. dpdata
3. pylammps

If you have any questions, seek help from https://github.com/deepmodeling/deepmd-kit/discussions

installation finished.
WARNING:
    You currently have a PYTHONPATH environment variable set. This may cause
    unexpected behavior when running the Python interpreter in deepmd-kit.
    For best results, please verify that your PYTHONPATH only points to
    directories of packages that are compatible with the Python interpreter
    in deepmd-kit: /home/kluo/work/apps/deepmd-kit
Do you wish to update your shell profile to automatically initialize conda?
This will activate conda on startup and change the command prompt when activated.
If you'd prefer that conda's base environment not be activated on startup,
   run the following command when conda is activated:

conda config --set auto_activate_base false

You can undo this by running `conda init --reverse $SHELL`? [yes|no]
[no] >>> no

You have chosen to not have conda modify your shell scripts at all.
To activate conda's base environment in your current shell session:

eval "$(/home/kluo/work/apps/deepmd-kit/bin/conda shell.YOUR_SHELL_NAME hook)" 

To install conda's shell functions for easier access, first activate, then:

conda init

Thank you for installing deepmd-kit!
