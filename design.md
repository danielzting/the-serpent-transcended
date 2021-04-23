# Design Document

## Introduction and Purpose

For my final project, I took my midterm essay and turned it into a "text adventure." For context, *The Talos Principle* concerns a hypothetical future where scientists attempt to instill the human soul into a machine in the face of an extinction event. I argued that the game conveyed the following three main points about the "what," "how," and "why" of this project:

**What traits distinguish humans from animals or robots?**
Humans are set apart by our curiosity, playfulness, and problem-solving skills.

**How can humanity be preserved in an artificial intelligence?**
Our legacy lives on in our memories and creations. As long as they are remembered, we aren't really gone.

**Why even try? Are we even worth saving?**
Yes, life is deeply beautiful and ought to be continued.

In my game, you discuss these questions with the Milton Library Assistant. He remains true to his nihilistic character and attempts to refute everything you say that might imply humans are special or good.

The intention is to mimic the terminal conversations the player has with Milton in *The Talos Principle* and inspire them to think critically about these issues and question their assumptions. The idea is to challenge the player's foundational philosophical beliefs, but I did not intend to espouse a particular correct worldview in designing this game.  My goal was simply to imitate Milton as best as I could.

## Technical Details

This game was created with vanilla HTML, CSS, and JavaScript. I took this as an opportunity to get "back to the basics" with web technologies, since I had only used high-level frameworks like React before. In addition, I am proud to say this meant the entire game could fit in a bit more than ten kilobytes, so even someone on a satellite connection could play, even though I don't expect that to ever happen.  This overall was an excellent and entertaining learning experience.

To create the old-school retro CRT hacker effect, I used two tricks: [a small white shadow around the green text](https://retrocomputing.stackexchange.com/a/12842) to make it look "glowing" and [a repeating dark horizontal line running over the text](https://css-tricks.com/old-timey-terminal-styling/) to emulate the "scanlines." Another simple but important trick I employed to enhance the "realism" was inserting a longer delay after periods and newlines.  This made it feel like you were talking to a real person with pauses in between sentences with almost no additional implementation effort.

The actual logic follows the "state machine" design pattern. This common concept revolves around a collection of states and their transitions. In this case, the states are the dialogue and the transitions are your responses. This allowed me to write the script without the million conditional `if/else` statements required by the naive method.

If I were to expand or redo the game, I would definitely refactor the code (it's basically the core state machine plus a bunch of small hacks to add little features I realized I needed in the middle of development) and write my own parser to enable me to write the script in a natural language style instead of hardcoding it in JavaScript syntax, which was unwieldy. The only problem I ran into was that since appending a single character to a string requires reconstructing the entire string from scratch in memory, doing it in a loop as I was resulted in a quadratic time complexity. This can easily cause visible lagging of the cursor on less powerful hardware. I worked around this by setting a limit on the body height: if you played on a tall screen, you can notice the text doesn't fill up all of the available vertical space, and this is why.

## Endings

Obviously, talking about the endings requires a spoiler warning. Which ending you get depends on your answer to Milton's final question about the value of the human race. If you end up agreeing with Milton, you have the choice of asking him why he bothers to live if he truly believes nothing matters. He humorously mocks you again but then self-destructs. In a darker ending, you can also choose to exploit a buffer overflow vulnerability in his code, which too permanently "kills" him. Perhaps the ending in which you do not either assert that humans are good or humans are evil can be argued to be the "worst" one: admitting you lack convictions leads to an ending where you part ways with Milton, and the screen fades to black, with nothing else happening.  If you claim that humanity is precious despite Milton's arguments, you end up "reviving" him after he crashes due to a software bug. He then scurries off, refusing to engage with you any further.
