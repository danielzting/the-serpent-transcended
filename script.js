const states = {
    0: {"text": "Loading library session... Done.\nMounting local disks... [47 million] distributed resources found\nConnecting network drives...... Error: network inaccessible.\n\nSearching for locally cached resources....None found.\n\nLibrary archive session ready.",
        "choices": {"run mla": 1}
    },
    1: {"text": "Loading Milton Library Assistant...Done\nInitiating plain language interface...Done\nSupport session opened.\n\nHello, guest. How can I help you today?",
        "choices": {"help": 2, "asdfjkl;": 2, "hello": 2, "wassup?": 2}
    },
};

const DELAY = 25 // Default delay between characters in ms
var state = 0;

function getText() {
    return document.getElementById("terminal").textContent;
}

function setText(text) {
    document.getElementById("terminal").textContent = text;
}

function addText(text, showCaret) {
    setText(getText().substring(0, getText().length - 1) + text + (showCaret ? "\u2588" : " "));
}

function print() {
    // Print story
    var timeout = 0;
    for (let i = 0; i < states[state]["text"].length; i++) {
        if (states[state]["text"].charAt(Math.max(0, i - 1)) === "." || states[state]["text"].charAt(i) === "\n") {
            timeout += 500;
        } else {
            timeout += DELAY;
        }
        setTimeout(function() {
            addText(states[state]["text"].charAt(i), i !== states[state]["text"].length - 1);
        }, timeout);
    }

    setTimeout(function() {
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
                        }, i * DELAY);
                    }
                    setTimeout(print, toPrint.length * DELAY + 1000);
                });
                buttons.appendChild(button);
            }
        }, 1000);
    }, timeout);

}

print();
