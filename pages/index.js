import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";

import posthog from "posthog-js";

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    posthog.init("phc_JgLe9991BTzddL5oiIFK3riRmUdE1AwHX9Zb3dCybs1", {
      api_host: "https://app.posthog.com",
    });
    console.log("Calling OpenAI...");
    posthog.capture("ayah generated", { property: "value" });
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className='root'>
      <Head>
        <title>Ayahs.fyi</title>
      </Head>
      <div className='container'>
        <div className='header'>
          <div className='header-title'>
            <h1>Ayahs.fyi</h1>
          </div>
          <div className='header-subtitle'>
            <h2>Search for any ayah about anything.</h2>
          </div>
        </div>
        <div className='prompt-container'>
          <textarea
            className='prompt-box'
            placeholder='business, marriage, charity, interest (riba), etc.'
            value={userInput}
            onChange={onUserChangedText}
          />
          ;
          <div className='prompt-buttons'>
            <a
              className={
                isGenerating ? "generate-button loading" : "generate-button"
              }
              onClick={callGenerateEndpoint}>
              <div className='generate'>
                {isGenerating ? (
                  <span className='loader'></span>
                ) : (
                  <p>Generate</p>
                )}
              </div>
            </a>
          </div>
        </div>
        {apiOutput && (
          <div className='output'>
            <div className='output-header-container'>
              <div className='output-header'>
                <h3>Results</h3>
              </div>
              <div className='output-subtitle'>
                <h3>
                  Clicking generate will result in a different ayat each time.
                </h3>
              </div>
            </div>
            <div className='output-content'>
              <p>{apiOutput}</p>
            </div>
          </div>
        )}

        <div className='badge-container grow'>
          <a
            href='https://twitter.com/omarwasm'
            target='_blank'
            rel='noreferrer'>
            <div className='badge'>
              <p>built by @omarwasm</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
