"use client"
import { useState } from "react"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function SocialShareGenerator() {

    const [text, setText] = useState<string | null>(null)

    return (
        <div className="w-full">
            <Label>Text to share</Label>
            <Textarea 
            className="mt-2"
            placeholder="Type the text you want to share" 
            onChange={(e) => {setText(e.target.value); console.log(e.target.value)}}
            />
            {text && 
            <div className="mt-4">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Plain Text</h2>
                    <code>
                    https://x.com/intent/tweet?text={text} <br/>
                    https://threads.net/intent/post?&text={text} <br/>
                    https://web.whatsapp.com/send?text={text} <br/>
                    http://www.reddit.com/submit?&title={text} <br/>
                    https://t.me/share/url&text={text} <br/>
                    https://www.facebook.com/sharer/sharer.php?&quote={text} <br/>

                    whatsapp://send?text={text} <br/>
                    tg://msg?&text={text} <br/>
                    </code>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Text in Ahref</h2>
                    <code>
                        {`<a href="https://x.com/intent/tweet?text=${text}" target="_blank" rel="noreferrer">Twitter</a>`} <br/>
                        {`<a href="https://threads.net/intent/post?&text=${text}" target="_blank" rel="noreferrer">Threads</a>`} <br/>
                        {`<a href="https://web.whatsapp.com/send?text=${text}" target="_blank" rel="noreferrer">Whatsapp</a>`} <br/>
                        {`<a href="http://www.reddit.com/submit?&title=${text}" target="_blank" rel="noreferrer">Reddit</a>`} <br/>
                        {`<a href="https://t.me/share/url&text=${text}" target="_blank" rel="noreferrer">Telegram</a>`} <br/>
                        {`<a href="https://www.facebook.com/sharer/sharer.php?&quote=${text}" target="_blank" rel="noreferrer">Facebook</a>`} <br/>

                        {`<a href="whatsapp://send?text=${text}" target="_blank" rel="noreferrer">Whatsapp Mobile App</a>`} <br/>
                        {`<a href="tg://msg?&text=${text}" target="_blank" rel="noreferrer">Telegram Mobile App</a>`}

                    </code>
                </div>
            </div>
            }
        </div>
    )
}