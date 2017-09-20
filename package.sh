#!/bin/bash
echo "Running script: ./buildext.sh"
./buildext.sh
echo "Running Electron Packager"
npm run-script package