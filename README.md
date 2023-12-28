# Improving Uncertainty in Chain of Custody for Image Forensics Investigation Using Blockchain Technology

## Project Overview

Implementing blockchain technology to enhance the chain of custody process for forensic evidence records. The project ensures the preservation of evidence integrity by recording its history from discovery to case closure. The chain of custody form tracks storage locations, access history, and actions performed on the evidence.

## Features of Data

### Actions

1. **Add**
   - Add a new evidence item to the blockchain and associate it with the given case identifier.
   - State of a newly added item is CHECKEDIN.
   - Unique evidence ID required.

2. **Checkout**
   - Add a new checkout entry to the chain of custody for the given evidence item.
   - Checkout actions on existing blockchain evidence items.

3. **Checkin**
   - Add a new checkin entry to the chain of custody for the given evidence item.
   - Checkin actions on existing blockchain evidence items.

4. **Log**
   - Display blockchain entries, oldest first (unless -r is given).

5. **Remove**
   - Prevent further action on the specified evidence item.
   - State must be CHECKEDIN for the action to succeed.

6. **Init**
   - Sanity check. Starts up and checks for the initial block.

7. **Verify**
   - Parse the blockchain and validate all entries.

### Arguments

- **-c case_id**
   - Must be a valid UUID.
   - Specifies the case identifier associated with the evidence.

- **-i item_id**
   - Specifies the evidence item’s identifier.
   - Item ID must be unique within the blockchain.

- **-r, --reverse**
   - Reverses the order of the block entries to show the most recent entries first.

- **-n num_entries**
   - Shows num_entries number of block entries when used with log.

- **-y reason, --why reason**
   - Reason for evidence item removal: DISPOSED, DESTROYED, or RELEASED.
   - If RELEASED, -o must also be given.

- **-o owner**
   - Information about the lawful owner to whom the evidence was released.

## Data Structure

| Block Offset | Length in Byte | Field Name - Description                                            |
| ------------ | --------------- | ------------------------------------------------------------------- |
| 0x00         | 20\* (160 bits) | **Previous Hash** - SHA1 of previous block                          |
| 0x18         | 8 (64 bits)     | **Timestamp** - Regular Unix timestamp (Double). ISO 8601 format.   |
| 0x20         | 16 (128 bits)   | **Case ID** - UUID stored as an integer.                             |
| 0x30         | 4 (32 bits)     | **Evidence Item ID** - 4-byte integer.                               |
| 0x34         | 11\*\* (88 bits)| **State** - Must be one of: INITIAL, CHECKEDIN, CHECKEDOUT, DISPOSED, DESTROYED, or RELEASED. |
| 0x40         | 4 (32 bits)     | **Data Length** (byte count) - 4-byte integer.                      |
| 0x44         | 0 to (2^32)     | **Data** - Free-form text with byte length specified in Data Length |

\* Lengths in bits unless otherwise specified.  
\*\* Length may vary depending on the specific implementation.


**Blockchain Integration:**
  - **Smart Contracts Language:** Solidity
  - **Blockchain Platform:** Ethereum
  - **Web3 Library:** Web3.js
  - **Hash Algorithm:** SHA-256
  - **Integration Language:** Python
  - **API Communication:** RESTful API
  - **Container Orchestration:** Kubernetes
  - **Database:** MySQL


- Developed fuzzy hash functions for digital evidence, reducing sensitivity to input changes.
- Enhanced High Security, reduced security breaches by 91.8% in IPFS Network.
- Ensured data integrity and robust system performance through effective fuzzy hash functions.
- **TechStack:** Solidity, Ethereum, Web3.js, SHA-256, Python, RESTful API, Kubernetes, MySQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SHAMSUNDAR20/Forensic-Blockchain.git
   cd Forensic-Blockchain
