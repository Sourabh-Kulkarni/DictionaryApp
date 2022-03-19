import React from 'react';
import './Definitions.css';
debugger;
const Definitions = ({word,category, meanings, LightTheme}) => {
  return (
    <div className='meanings'>
      {/* audio---------------------------- */}
      <div >
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "white", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      </div>
      {/* audio---------------------------- */}


        {/* ********* Word meaning ********** */}

      {word === "" ? (
      <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
        {/* ********* Word meaning ********** */}

    </div>
  )
}

export default Definitions