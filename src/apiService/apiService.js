// apiService.js

const apiUrl = 'http://localhost:8080/api/resumes'; // Update this URL to match your backend endpoint

export const saveResume = async (resumeData) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resumeData),
        });

        if (!response.ok) {
            throw new Error('Failed to save resume');
        }

        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
