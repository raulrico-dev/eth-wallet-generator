import './generator.css';

export default function ExportButton(params) {
    const data = params.data;

    const handleExport = () => {
        const csvRows = [
            ['Creation Date', 'Notes', 'Wallet Address', 'Private Key', 'Mnemonic Phrase'], // CSV header
            [new Date().toISOString(), 'Created with Wallet Generator by RaulRico', data.address, data.privateKey, data.mnemonic] // CSV content
        ];

        // Convert the array to a string with comma-separated values
        const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');

        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'wallet-by-raulrico.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Export button clicked');
    };
    return (
        <button onClick={handleExport} className="btn primary-btn gap-2">
            {"Export"}
            <svg
                width="32"
                height="32"
                viewBox="0 0 16 16"
                fill="none"
                stroke='currentColor'
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3.25 13.25h9m-8.5-6.5 4 3.5 4-3.5m-4-5v8.5" />
            </svg>
        </button>
    )
}

