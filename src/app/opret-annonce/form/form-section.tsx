interface FormSectionProps {
    title: string;

    children?: React.ReactNode;
}

const FormSection = ({title, children}: FormSectionProps) => {
    return (
        <div className="form-section">
            <div className="title">
                {title}
            </div>

            <div className="content">
                {children}
            </div>
        </div>
    )
    
}

export default FormSection;