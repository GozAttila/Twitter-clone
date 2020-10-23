import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        if (tweetMessage !== "" || tweetImage !== '') {

        db.collection("posts").add({
            displayName: "Goz Attila",
            username: "arkyll",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://avatarfiles.alphacoders.com/209/209843.jpg',
        });

        setTweetMessage("");
        setTweetImage("");
    } else {
            alert("There is nothing to Tweet!")
        }
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatarfiles.alphacoders.com/209/209843.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
