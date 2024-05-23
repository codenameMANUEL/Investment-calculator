import banner from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <header id="header">
            <img src={banner} alt="money-bag" />
            <h1>Retur Of Investment Calculator</h1>
        </header>
    )
}