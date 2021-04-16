const states = {
    0: {"text": "Loading library session... Done.\nMounting local disks... [47 million] distributed resources found\nConnecting network drives...... Error: network inaccessible.\n\nSearching for locally cached resources....None found.\n\nLibrary archive session ready.",
        "choices": {"run mla": 1, "text": 1}
    },
    1: {"text": "Loading Milton Library Assistant...Done\nInitiating plain language interface...Done\nSupport session opened.\n\nHello, guest. How can I help you today?",
        "choices": {"help": 2, "asdfjkl;": 2, "hello": 2, "wassup?": 2}
    }
};

var state = 0;

function getText() {
    return document.getElementById("terminal").textContent;
}

function setText(text) {
    document.getElementById("terminal").textContent = text;
}

function print() {
    var timeout = 0;
    for (let i = 0; i < states[state]["text"].length; i++) {
        if (states[state]["text"].charAt(Math.max(0, i - 1)) === "." || states[state]["text"].charAt(i) === "\n") {
            timeout += 500;
        } else {
            timeout += 25;
        }
        setTimeout(function() {
            setText(getText() + states[state]["text"].charAt(i));
        }, timeout);
    }
    setTimeout(function() {
        setText(getText() + "\n\n");
        setInterval(function() {
            if (getText().charAt(getText().length - 2) !== ">") {
                setText(getText() + "> ");
            } else {
                setText(getText().substring(0, getText().length - 2));
            }
        }, 1000);
    }, timeout);
}

print();
