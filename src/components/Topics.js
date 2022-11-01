import React from "react";

function Topics() {

    const topics = [ "agree or disagree: my company is ahead of the pack.",  "some news I found out recently", "ask a question using 2nd or 3rd conditional", "something I'd like to save money for", "something I need to pay more attention to", "reflection on this week: one thing that went well, and one thing I learned", "I need to get back on track with ___",  "what I wish I had known before having kids (or getting married)",  "one habit I want to get rid of and one habit I want to keep", "if you could return to school, what would you study?", "something deeply honest about my life right now",   "did your degree prepare you well for your career?", "it's hard for me to keep track of _____.", "a movie I don't mind watching over and over" ];

    function newTopic() {
        let randomTopic= Math.floor(Math.random()*(topics.length));

        let answer = topics[randomTopic];

        let innerHTML = {_html: answer};
        
        return (
        <div dangerouslySetInnerHTML={innerHTML} />
        )


    }


    return (

    <div className="english-topics">
    <h3>Topic Generator</h3>
    <button className="button button-english" onClick={()=>newTopic()}>Get a Topic!</button>
    {/* <div className="topic-display">
    </div> */}
    </div>
    )

}

export default Topics;