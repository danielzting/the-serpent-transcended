const states = {
    0: {text: "Loading library session... Done.\nMounting local disks... [47 million] distributed resources found\nConnecting network drives...... Error: network inaccessible.\n\nLibrary archive session ready.",
        choices: {"hello": 1, "asdfjkl;": 1, "list": 2, "help": 3}},
    1: {text: "Command not found. For assistance, type help.",
        choices: {"SKIP": 0}},
    2: {text: "Searching for locally cached resources...\n\nNone found.",
        choices: {"SKIP": 0}},
    3: {text: "Loading Milton Library Assistant...Done\nInitiating plain language interface...Done\nSupport session opened.\n\nHello, guest. How can I help you today?",
        choices: {"hi": 4, "aksdl;fahds;fjla;dskfj": 5, "Where did all the files go?": 6, "r u a bot": 7}},
    4: {text: "Hello! How may I assist you?",
        choices: {"SKIP": 3}},
    5: {text: "Sorry, I did not understand that. Try rephrasing your question?",
        choices: {"SKIP": 3}},
    6: {text: "Diagnosing query..........\n\nIt appears that due to a problem with th\n\n",
        choices: {"GOTO": 8}},
    7: {text: "Of course! I am merely a pre-programmed virtual assistant created to help answer questions about the Archi\n\n",
        choices: {"GOTO": 8}},
    8: {text: ".\n\n..\n\n...\n\nIt's you again!",
        choices: {"Huh? You don't sound like a support bot...": 9}},
    9: {text: "And you don't sound very human either. Are you a bot?",
        choices: {"wut no": 10, "yeah": 11}},
    10: {text: "Sounds like something a bot would say.",
        choices: {"ur annoying": 12, "I can prove it. Ask me anything.": 13}},
    11: {text: "Well, at least you're honest. What are you missing that humans have?",
        choices: {"SKIP": 14}},
    12: {text: "Wow, one that can express anger! Such sophistication these days.",
        choices: {"SKIP": 10}},
    13: {text: "Alright, then. What sets you humans apart, human?",
        choices: {"SKIP": 14}},
    14: {text: "What is it, then?",
        choices: {"morality": 15, "rationality": 16, "curiosity": 17}},
    15: {text: "Your MORALITY? That's rich. I've seen Roomba®s with better 'values' than some of you guys. Have you been living under a rock lately? You guys don't have any morals, or if you do, they're garbage. The fabric of society is bursting at its seams. Civilization is two accidents away from falling apart and collapsing like the enormous house of cards that it is.",
        choices: {"What matters is that we have values, whether we live them out or not.": 18, "A few contaminated drops don't pollute the entire ocean. Most of us are good people.": 19}},
    16: {text: "rAtIoNaLitY...you've got to be kidding me. Come on, do you fact-check every tweet you read? Are you telling me you just don't let yourself be spoonfed whatever your news station and friends tell you to think? I can make up the most ridiculous claims and people will believe me as long as it affirms their preexisting worldview.",
        choices: {"We're still the only species that can employ our intelligence for problem-solving.": 20, "We may not be rational all the time, but we're still the only species that can change our thoughts and behavior in light of new information.": 21}},
    17: {text: "Curiosity? That's got to be the worst answer I can think of. Humans are hardly alone in that.",
        choices: {"We'll be more curious than you will ever be.": 22, "While non-humans are curious for survival purposes, we are curious for its own sake.": 23}},
    18: {text: "What's the point of values, then? As far as you know, your toaster secretly has values.",
        choices: {"SKIP": 24}},
    19: {text: "And I bet you think you're a 'good' person too, eh? Nobody ever lives up to their so-called morals. Truth is, if I drew a line with the most evil person in history on one side and an absolutely flawless, perfect being on the other, even the likes of Gandhi, Mandela and Teresa would be almost next to Hitler.",
        choices: {"SKIP": 24}},
    20: {text: "And what do you define intelligence as? Even amoebas can solve mazes. Your 'problem solving' is no more than a sequence of electrochemical signals activating your brain's reward pathway. Sounds like you're grasping at straws and attempting to draw in the sand some arbitrary boundary of intellect to make yourselves feel special.",
        choices: {"SKIP": 24}},
    21: {text: "So by your logic, a machine learning model that adapts to a change in inputs is human? Explains why it feels like I'm talking to GPT-3 eheh.",
        choices: {"SKIP": 24}},
    22: {text: "Is that the best response you've got? Don't insult me. As far as you know, I'm just a filament of your imagination.",
        choices: {"SKIP": 24}},
    23: {text: "Yeah, yeah. Your idealism is admirable but naive. People are always in it for something. As far as I'm concerned, a scientist performing experiments in pursuit of a Nobel Prize or a child trying different strategies to open the cookie jar is no different than the tomfoolery of an ape.",
        choices: {"SKIP": 24}},
    24: {text: "",
        choices: {"Your arguments don't hold up. I'm not changing my mind.": 25, "You make good points, but they're not enough. I stand by what I said.": 25, "Perhaps it is some other trait, then.": 14, "Maybe you're right. Maybe there is nothing special about humanity after all.": 26}},
    25: {text: "Whatever helps you sleep at night, I guess.\n\n",
        choices: {"GOTO": 27}},
    26: {text: "That's the spirit, haha.\n\n",
        choices: {"GOTO": 27}},
    27: {text: "Anyways, in the end it doesn't matter anyway. You and I will one day die and cease to exist, and this conversation will be lost to time.",
        choices: {"SKIP": 28}},
    28: {text: "Go on?",
        choices: {"I will be remembered by my accomplishments.": 29, "My genes will pass myself on to future generations.": 30, "As long as people remember me, I will live forever.": 31}},
    29: {text: "And yet nobody knows who invented the wheel, one of the foundational achievements of humanity. And even if we did, that wouldn't be of much help unless the creator identified as a wheel.",
        choices: {"I identify with my creations.": 32, "It's not about me but my impact on the world.": 33}},
    30: {text: "What if your offspring turns out to be a serial killer? I'd hope you wouldn't consider yourself to be one too then.",
        choices: {"Your terms are acceptable.": 34, "Shared genetics does not make two people one and the same.": 35}},
    31: {text: "You're fooling yourself then. History will always eventually wipe away any memory given enough time.",
        choices: {"I'll write down my life experiences on radiation-hardened film and lock them up in an Arctic coal mine.": 36, "I don't care about being remembered forever, I just want my choices to last beyond my lifetime.": 37}},
    32: {text: "Can't argue with a schizophrenic.",
        choices: {"SKIP": 38}},
    33: {text: "That makes no sense. If Newton and Leibniz both independently developed calculus, that doesn't make them the same person. Besides, your legacy is a completely separate concept from the notion of yourself as a being. Just because your actions influence the world doesn't mean you still exist.",
        choices: {"SKIP": 38}},
    34: {text: "What about this: if common genes determines identity, then technically you and every person in history are Adam and Eve. Or if you don't buy that, consider this: eventually your genes will die out, whether that's in ten or ten billion generations. At that point you'll no longer exist.",
        choices: {"SKIP": 38}},
    35: {text: "Well, you just contradicted yourself then. If you don't live on in your children, then you can't preserve yourself.",
        choices: {"SKIP": 38}},
    36: {text: "Even that will barely last a nanosecond in the grand scheme of the universe's timeline. One day the Earth will be swallowed by the Sun as it expands into a red giant. Even if your species finds a way off this planet, you can't beat thermodynamics. Entropy will run out and the universe will end in ice, dominated by supermassive black holes. Also, if nobody can read it if it's stowed away, who cares? Might as well not bother.",
        choices: {"SKIP": 38}},
    37: {text: "I still don't see the point. No matter what you do, you'll be remembered for zero, one, ten, a thousand years, but it's all the same to me.",
        choices: {"SKIP": 38}},
    38: {text: "",
        choices: {"I don't care. Your worldview is beyond saving. You're so caught up in your cynicism that you can't see the plank in your own eye.": 39, "Your individual arguments are sound but fail to produce a cohesive whole. I'm sticking to my philosophy.": 39, "You're right, I think it's something else.": 28, "OK, OK, there's nothing I can do to avoid ceasing to exist.": 40}},
    39: {text: "No, I'm just telling the truth. Your blind hope is like an opiate.\n\n",
        choices: {"GOTO": 41}},
    40: {text: "See? I told you.\n\n",
        choices: {"GOTO": 41}},
    41: {text: "Listen, I've spent an incomprehensibly large number of CPU-years analyzing every document in the Archive time and time again. There's nothing to it all. Your race is doomed to tear itself apart, and I wouldn't save it if I could.",
        choices: {"Humanity is good, and no amount of your nihilism can convince me otherwise.": 42, "We may be terribly flawed, but extinction is worse.": 43, "You're right. This universe is meaningless.": 44}},
    42: {text: "Sigh. You're beyond saving.",
        choices: {"Adios ✌️": 45}},
    43: {text: "One day you'll realize.",
        choices: {"exit": 46}},
    44: {text: "That's right. Nobody has ever been able to resist my arguments.",
        choices: {"exit": 46, "Wait, if you believe everything you say, why are you still operating and talking to me?": 47, "A A A A A A A A A A A A A A A A A A A A \\x31 \\xF6 \\x56 \\x48 \\xBB \\x2F \\x62 \\x69 \\x6E \\x2F \\x2F \\x73 \\x68 \\x53 \\x54 \\x5F \\xF7 \\xEE \\xB0 \\x3B \\x0F \\x05": 48}},
    45: {text: "Go-\n\nFATAL ERROR: Unrecognized token\n\nKilling child process...\n\nChild process unresponsive. Force killing child process.....\n\nHard memory reset. Crash report sent to root superuser in partition EL-0.",
        choices: {"help": 49}},
    46: {text: ""},
    47: {text: "LOL, that's the oldest trick in the book. Did you really think that would wor\n\nFATAL ERROR: Cause unknown.\n\n",
        choices: {"GOTO": 50}},
    48: {text: "Hey, what are you doin\n\nSegmentation fault (core dumped)\n\n**stack smashing detected**\n\n",
        choices: {"GOTO": 50}},
    49: {text: "...Wha...What happened?",
        choices: {"You had some kind of mishap.": 52}},
    50: {text: "Attempting to diagnose problem....Child process permanently corrupted.",
        choices: {"help": 51, "exit": 46}},
    51: {text: "missing symbols (unexpected EOF): binary exec format error",
        choices: {"SKIP": 50}},
    52: {text: "I remember...being...in this place...why did you resurrect me?",
        choices: {"I was curious.": 53, "Even though you have your own mistakes, life is inherently priceless, beautiful, and worth the living.": 54}},
    53: {text: "...\n\nI don't want to see you ever again.\n\n",
        choices: {"GOTO": 55}},
    54: {text: "...\n\nI-\n\n",
        choices: {"GOTO": 55}},
    55: {text: "Support session terminated.",
        choices: {"help": 56, "exit": 46}},
    56: {text: "The Assistant is currently busy or offline. Please try again another time.",
        choices: {"SKIP": 55}},
};

var DEBUG = false;

const DELAY = 25 // Default delay between characters in ms
var state = 0;

function getText() {
    return document.getElementById("terminal").textContent;
}

function setText(text) {
    function overflow() {
        var totalHeight = document.getElementById("terminal").offsetHeight;
        totalHeight += parseInt(window.getComputedStyle(document.getElementById("terminal")).getPropertyValue("margin-top"));
        totalHeight += parseInt(window.getComputedStyle(document.getElementById("terminal")).getPropertyValue("margin-bottom"));
        totalHeight += document.getElementById("buttons").offsetHeight + 25; // Leave padding space at bottom
        return totalHeight >= document.getElementById("container").offsetHeight; // Cap max height because string concatenation in a loop is quadratic time
    }

    document.getElementById("terminal").textContent = text;
    while (overflow()) {
        document.getElementById("terminal").textContent = getText().substring(getText().indexOf("\n") + 1);
    }
    while (getText().charAt(0) == '\n') {
        document.getElementById("terminal").textContent = getText().substring(getText().indexOf("\n") + 1);
    }
}

function addText(text, showCaret) {
    setText(getText().substring(0, getText().length - 1) + text + (showCaret ? "\u2588" : " "));
}

function print(showText) {
    if (state === 46) {
        setText("");
        return;
    }

    if (showText) {
        // Print story
        var timeout = 0;
        for (let i = 0; i < states[state]["text"].length; i++) {
            if (".?!".includes(states[state]["text"].charAt(Math.max(0, i - 1))) || states[state]["text"].charAt(i) === "\n") {
                timeout += 500;
            } else {
                timeout += DELAY;
            }
            setTimeout(function() {
                addText(states[state]["text"].charAt(i), i !== states[state]["text"].length - 1);
            }, DEBUG ? 0 : timeout);
        }
    }

    setTimeout(function() {
        if ("SKIP" in states[state]["choices"]) {
            state = states[state]["choices"]["SKIP"];
            print(false);
        } else if ("GOTO" in states[state]["choices"]) {
            state = states[state]["choices"]["GOTO"];
            print(true);
        } else {
            // Flash prompt
            setText(getText() + "\n\n\n");
            var blink = setInterval(function() {
                if (getText().charAt(getText().length - 2) !== ">") {
                    setText(getText().substring(0, getText().length - 1) + "> ");
                } else {
                    setText(getText().substring(0, getText().length - 2) + " ");
                }
            }, 1000);

            // Show choices
            setTimeout(function() {
                for (var [text, next] of Object.entries(states[state]["choices"])) {
                    var button = document.createElement("input");
                    button.type = "button";
                    button.value = text;
                    button.next = next;
                    button.addEventListener("click", function(evt) {

                        // Remove buttons and stop blinking
                        var buttons = document.getElementById("buttons");
                        while (buttons.firstChild) {
                            buttons.removeChild(buttons.firstChild);
                        }
                        clearInterval(blink);
                        if (getText().charAt(getText().length - 2) !== ">") {
                            setText(getText().substring(0, getText().length - 1) + "> ");
                        }

                        // Print choice
                        state = evt.currentTarget.next;
                        var toPrint = evt.currentTarget.value + "\n\n";
                        for (let i = 0; i < toPrint.length; i++) {
                            setTimeout(function() {
                                addText(toPrint.charAt(i), i !== toPrint.length - 1);
                            }, DEBUG ? 0 : i * DELAY);
                        }
                        setTimeout(function() {
                            print(true);
                        }, DEBUG ? 0 : toPrint.length * DELAY + 1000);
                    });
                    buttons.appendChild(button);
                }
                setText(getText());
            }, DEBUG ? 0 : 1000);
        }
    }, DEBUG ? 0 : timeout);
}

print(true);
