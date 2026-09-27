# Flashcard "Study Again" Button Fix

## Steps
- [x] Analyze the bug (summary "Study Again" builds empty queue due to mastery filter)
- [x] Add `forceAll` parameter to `startFlashcards()` to allow restudying all cards
- [x] Update `summaryRestart` handler to call `startFlashcards(true)` for full restudy
- [x] Verify the button restarts the full deck in a browser
