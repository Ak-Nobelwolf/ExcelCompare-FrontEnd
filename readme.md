# Excel Comparison Tool

This project provides a user-friendly interface for comparing two Excel files column-wise.

## Features

- Compare Excel files based on column values.
- Supports .xlsx and .xls formats.
- Detailed result in a downloadable text file.

## Usage

1. **Upload Files**:
   - Select your source, target, and property files using the file input fields provided.
   - Ensure that your source and target files are in either .xlsx or .xls format, and your property file is in .properties format.

2. **Property File**:
   - The property file should contain properties such as `sourceColumns` and `targetColumns`.
   - Example:
     ```properties
     sourceColumns=Name, Address, Age
     targetColumns=Name, Address, Age
     ```
   - Create the property file using a text editor and save it with a .properties extension.

3. **Compare Files**:
   - Click the "Compare Files" button to start the comparison process.

4. **View Results**:
   - Once the comparison is completed, a text file (.txt) named `result_file` will be downloaded to your device. You can analyze the results from this file.

## Contributions

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to create a pull request or raise an issue in the [GitHub repository](https://github.com/Ak-Nobelwolf/Excel-Comparison).

## Backend Repository

The backend component of the Excel Comparison Tool is hosted in a separate repository. You can find the backend code and related documentation at [Excel-Comparison](https://github.com/Ak-Nobelwolf/Excel-Comparison).

## Copyright

Copyright © 2024 Akshay Tadakod. All Rights Reserved.
