import Button from "../../../../../../../shared/@Button"
import SubmitMessage from "./SubmitMessage"

type SubmitButtonProps = {
    isSubmitted: boolean
}

export default function SubmitButton({ isSubmitted }: SubmitButtonProps) {
    return (
        <>
            <Button
                type="submit"
                className="submit-button"
                label={"Ajouter un nouveau produit au menu"}
                version="success"
            />
            {isSubmitted && <SubmitMessage />}
        </>
    )
}
