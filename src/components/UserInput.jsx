
export default function UserInput({onSelectChange, userInputState}) {
   
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Inital Investment</label>
                    <input
                        type="number"
                        required
                        value={userInputState.initialInvestment}
                        onChange={(e) => onSelectChange("initialInvestment", e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInputState.annualInvestment}
                        onChange={(e) => onSelectChange("annualInvestment", e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInputState.expectedReturn}
                        onChange={(e) => onSelectChange("expectedReturn", e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number"
                        required
                        value={userInputState.duration}
                        onChange={(e) => onSelectChange("duration", e.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}