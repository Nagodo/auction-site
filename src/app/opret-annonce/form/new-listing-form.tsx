"use client"
import ImageInput from "./fields/image-input";
import TextInput from "./fields/text-input";
import TwoSliderInput from "./fields/two-slider-input";
import FormSection from "./form-section";

export default function NewListingForm() {

    async function handleFormSubmit(formData: FormData) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/newlisting`, {
                method: 'POST',
                body: formData
            });
        } catch {
            console.error("Error");
        }
    }
    return (
        <div className="new-listing-form">
            <form action={handleFormSubmit}>
                <FormSection title="Titel">
                    
                    <TextInput id = "title" label="Opslags titel"  />
                    {/* TODO: Make rich text editor */}
                    <TextInput id = "description" label="Beskrivelse"  /> 
                </FormSection>

                <FormSection title="Billeder">
                    <ImageInput />
                    
                </FormSection>

                <FormSection title="Salg">
                    <TwoSliderInput id = "type" label="Type"/>
                    <TextInput id = "price" label="Pris"  />
                </FormSection>

                <button type="submit">Opret</button>
            </form>
        </div>
    );
}