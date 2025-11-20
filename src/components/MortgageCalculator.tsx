import { type FC, useState } from "react";

export const MortgageCalculator: FC = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateMortgage = () => {
    setError("");
    setResults(null);

    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);

    if (
      isNaN(P) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      P <= 0 ||
      annualRate <= 0 ||
      years <= 0
    ) {
      setError("Please enter valid positive numeric values for all fields.");
      return;
    }

    const i = annualRate / 100 / 12; // monthly interest rate
    const n = years * 12; // total number of payments

    const M = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);

    const totalPayment = M * n;
    const totalInterest = totalPayment - P;

    setResults({
      monthlyPayment: parseFloat(M.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Mortgage Calculator
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Loan Amount ($):</label>
        <input
          type="text"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Annual Interest Rate (%):</label>
        <input
          type="text"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Loan Term (years):</label>
        <input
          type="text"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <button
        onClick={calculateMortgage}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Calculate
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
          {error}
        </p>
      )}

      {results && (
        <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
          <p>
            <strong>Monthly Payment:</strong> ${results.monthlyPayment}
          </p>
          <p>
            <strong>Total Payment:</strong> ${results.totalPayment}
          </p>
          <p>
            <strong>Total Interest:</strong> ${results.totalInterest}
          </p>
        </div>
      )}
    </div>
  );
};
