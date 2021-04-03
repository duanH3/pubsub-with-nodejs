Node.js deployment to GKE
===================================


Note that each folder contains a distinct sample and must be imported separately.

Pre-requisites
--------------

- Android SDK v23
- Android Build Tools v23.0.2
- Android Support Repository

Getting Started
---------------

This sample uses the Gradle build system. 

First download the samples by cloning this repository or downloading an archived
snapshot. (See the options on the right hand side.)

In Android Studio, use the "Import non-Android Studio project" or 
"Import Project" option. Next select one of the sample directories
("PlacePicker" or "PlaceComplete").  If prompted for a gradle configuration
accept the default settings. 

Alternatively use the "gradlew build" command to build the project directly.

Don't forget to add your API key to the AndroidManifest.xml. 
(See https://developers.google.com/places/android/signup)

Support
-------

- Stack Overflow: http://stackoverflow.com/questions/tagged/google-play-services

If you've found an error in these samples, please file an issue:
https://github.com/googlesamples/android-play-places/issues

Patches are encouraged, and may be submitted according to the instructions in
CONTRIBUTING.md.

License
-------

Copyright 2015 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements.  See the NOTICE file distributed with this work for
additional information regarding copyright ownership.  The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License.  You may obtain a copy of
the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations under
the License.

[Place Autocomplete API]: <https://developers.google.com/places/android/autocomplete>
