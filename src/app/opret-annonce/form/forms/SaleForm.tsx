import { FormEvent } from "react";
import TextInput from "../fields/text-input";

interface NewSaleFormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function NewSaleForm({onSubmit}: NewSaleFormProps) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        onSubmit(event);
    }

    return (
        <div className="new-sale-form w-full  h-full">
            <form className="w-full  h-full" onSubmit={handleSubmit}>
                <TextInput id = "title" label = {"Titel"} />
                <TextInput id = "price" label = {"Pris"} />
                <TextInput id = "description" label = {"Beskrivelse"} />

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Opret annonce
                </button>
            </form>
        </div>
    )
}