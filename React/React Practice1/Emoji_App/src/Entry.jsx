import React from "react";

function Entry(props){                  // props 는 attribute: "value" 를 담고있는 Object
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
        {props.meaning}
    </dd>
  </div>
}

export default Entry