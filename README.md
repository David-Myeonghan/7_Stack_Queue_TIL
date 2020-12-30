## Intro

    - Linear data structures that allow us to go through data elements sequentially in which only one data element can bedirectly reached.
    - Can be implemented in similar ways.
    - Main difference is that how delete items
    - Unlike arrays, no random access operation. Dealing with items at the beginning or end.

# Stack

    - Like plates.
    - LIFO: Last In First Out, Last item goes out First

    - Lookup:   O(n)
    - Pop:      O(1)    Remove the last item
    - Push:     O(1)    Put an item
    - Peek:     O(1)    View the top last plate

    - Useful when need to know the last value added/seen.
    - Important in language specific engines.
    - Most programming langueases are modeled with the stack architecture.
    - Browser history use this structure.

# Queue

    - Like an entrance to roller coaster.
    - FIFO: First In First Out.
    - Uber, Restaurant, Printer

    - Lookup:   O(n)
    - Enqueue:  O(1)    add
    - Dequeue:  O(1)    remove
    - Peek:     O(1)    What's the first item

    - Why would we don't want an array to make a queue?: Because we have shift all the items when deleting.

## How to build?

    // Stack

    // Google
    // Udemy
    // Youtube

    // built by:
    // Arrays: Cache locality - faster, new memory needed.
    // Linked Lists: additional memory, dynamic memory.
    // Depens on your prefer and prioritise.

    // Queue
    // Matt - Joy - Samir - Pavel

    // Built certainly by:
    // Linked list, not array.
    // As we have to shift all items in arrays when we dequeue.

## JS - Single threaded

    - Single Threaded = one Call Stack.