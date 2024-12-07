import { useRef } from "react";
import { useState } from "react";

export default function RandomGift() {
    const gifts = ["Điện thoại", "Xe máy", "Oto", "Máy tính", "Đồng hồ"];
    const [result, setResult] = useState("");
    const counterRef = useRef(0);

    const handleRandom = () => {
        if (counterRef.current < 3) {
            const randomIndex = Math.floor(Math.random() * gifts.length);
            setResult(gifts[randomIndex]);
            counterRef.current = counterRef.current + 1;
        }
        else {
            alert("Bạn đã hết lượt")
        }

    }
    console.log(counterRef)

    return (
        <>
            <button onClick={handleRandom}>Random</button>
            <div>
                <h1>Món quà của bạn đã trúng thưởng: {result}</h1>
            </div>
        </>
    )
}
