
import React, { useState, useCallback } from 'react';
import type { Person } from '../types';
import { getInsightsFromData } from '../services/geminiService';

interface DataInsightsProps {
    people: Person[];
}

const DataInsights: React.FC<DataInsightsProps> = ({ people }) => {
    const [insights, setInsights] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateInsights = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setInsights('');
        try {
            const result = await getInsightsFromData(people);
            setInsights(result);
        } catch (err) {
            setError('Failed to generate insights. Please check the API key and try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [people]);

    return (
        <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-text-secondary flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI-Powered Data Insights
                </h3>
                <button
                    onClick={handleGenerateInsights}
                    disabled={isLoading || people.length === 0}
                    className="bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                        'Generate Insights'
                    )}
                </button>
            </div>
            {error && <p className="text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}
            {insights && (
                 <div className="prose prose-sm max-w-none p-4 bg-blue-50 border border-blue-200 rounded-lg text-text-primary whitespace-pre-wrap font-sans">
                    {insights}
                </div>
            )}
            {!insights && !isLoading && !error && (
                <p className="text-text-secondary">Click the button to generate AI-driven analysis of the current population data.</p>
            )}
        </div>
    );
};

export default DataInsights;
