# Improving Uncertainty in Chain of Custody for Image Forensics Investigation
Using Blockchain Technology

Using blockchain to implement chain of custody to preserve forensic evidence records.

The Chain of Custody form is a critical element to a forensic investigation because examiners use it to record the history of the evidence from the time it is found until the case is closed or goes to court. By keeping this record, examiners can show that the integrity of the evidence has been preserved and not open to compromise. And in the unfortunate event that evidence does become contaminated, the chain of custody will clearly identify the responsible individual.

A Chain of Custody form keeps track of three pieces of important information (in addition to all the details that uniquely identify the specific piece of evidence)

- Where the evidence was stored.
- Who had access to the evidence and when.
- What actions were done to the evidence.



## Features of Data

Below listed are action and arguements along with their descriptions

### Actions

1. Add

> Add a new evidence item to the blockchain and associate it with the given case identifier. For users’ convenience, more than one item_id may be given at a time, which will create a blockchain entry for each item without the need to enter the case_id multiple times. The state of a newly added item is CHECKEDIN. The given evidence ID must be unique (i.e., not already used in the blockchain) to be accepted.

2. Checkout

> Add a new checkout entry to the chain of custody for the given evidence item. Checkout actions may only be performed on evidence items that have already been added to the blockchain.

3. Checkin

> Add a new checkin entry to the chain of custody for the given evidence item. Checkin actions may only be performed on evidence items that have already been added to the blockchain.

4. Log

> Display the blockchain entries giving the oldest first (unless -r is given).

5. Remove

> Prevents any further action from being taken on the evidence item specified. The specified item must have a state of CHECKEDIN for the action to succeed.

6. Init

> Sanity check. Only starts up and checks for the initial block.

7. Verify

> Parse the blockchain and validate all entries.

### Arguements

- -c case_id

```
Must be a valid UUID.
Specifies the case identifier that the evidence is associated with.
When used with log only blocks with the given case_id are returned.
```

- -i item_id

```
Specifies the evidence item’s identifier.
The item ID must be unique within the blockchain.
When used with log only blocks with the given item_id are returned.
This means you cannot re-add an evidence item once the remove action has been performed on it.
```

- -r, --reverse

```
Reverses the order of the block entries to show the most recent entries first.
```

- -n num_entries

```
When used with log, shows num_entries number of block entries.
```

- -y reason, --why reason

```
Reason for the removal of the evidence item.
Must be one of: DISPOSED, DESTROYED, or RELEASED.
If the reason given is RELEASED, -o must also be given.
```

- -o owner

```
Information about the lawful owner to whom the evidence was released.
At this time, text is free-form and does not have any requirements.
```

## Data Structure

| Block Offset          | Length in Byte        | Field Name - Description                                                                                                   |
| --------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 0x00, 0<sub>10</sub>  | 20\* (160 bits)       | **Previous Hash** - SHA1 of previous block                                                                                 |
| 0x18, 24<sub>10</sub> | 8 (64 bits)           | **Timestamp** - Regular Unix timestamp (Double). ISO 8601 format.                                                          |
| 0x20, 32<sub>10</sub> | 16 (128 bits)         | **Case ID** - UUID stored as an integer.                                                                                   |
| 0x30, 48<sub>10</sub> | 4 (32 bits)           | **Evidence Item ID** - 4-byte integer.                                                                                     |
| 0x34, 52<sub>10</sub> | 11\*\* (88 bits)      | **State** - Must be one of: INITIAL (for the initial block ONLY), CHECKEDIN, CHECKEDOUT, DISPOSED, DESTROYED, or RELEASED. |
| 0x40, 64<sub>10</sub> | 4 (32 bits)           | **Data Length** (byte count) - 4-byte integer.                                                                             |
| 0x44, 68<sub>10</sub> | 0 to (2<sup>32</sup>) | **Data** - Free form text with byte length specified in Data Length.                                                       |
