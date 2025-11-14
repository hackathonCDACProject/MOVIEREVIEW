import React, { useState, useEffect } from 'react';
// Import any necessary styling, e.g., a simple style.css file
// import './style.css'; 

function MovieForm({ initialMovieData, onSave, onCancel }) {
    // State to manage the form data
    const [formData, setFormData] = useState({
        name: '',
        releaseDate: '',
        plot: '',
        genre: 'action',
        language: 'english',
        trailer: ''
    });

    // Determine if we are adding or updating based on props
    const isUpdating = !!initialMovieData;

    // Use effect to populate the form if we are editing an existing movie
    useEffect(() => {
        if (initialMovieData) {
            setFormData(initialMovieData);
        }
    }, [initialMovieData]);

    // Handle input changes dynamically for all fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically call an API to save the data
        console.log('Submitting form data:', formData);
        // Call the parent component's save handler
        if (onSave) {
            onSave(formData);
        }
    };

    return (
        <div className="form-container">
            <h1>{isUpdating ? 'Update Movie' : 'Add New Movie'}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Name and Release Date Row */}
                <div className="grid-cols-2 gap-5">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Release Date:
                        <input
                            type="date"
                            name="releaseDate"
                            value={formData.releaseDate}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                {/* Plot Row */}
                <label>
                    Plot:
                    <textarea
                        name="plot"
                        value={formData.plot}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </label>

                {/* Genre, Language, Trailer Row */}
                <div className="grid-cols-3 gap-5">
                    <label>
                        Genre:
                        <select name="genre" value={formData.genre} onChange={handleChange}>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                        </select>
                    </label>
                    <label>
                        Language:
                        <select name="language" value={formData.language} onChange={handleChange}>
                            <option value="english">English</option>
                            <option value="telegu">Telegu</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </label>
                    <label>
                        Trailer URL:
                        <input
                            type="url"
                            name="trailer"
                            value={formData.trailer}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-5 mt-5">
                    {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
                    <button type="submit" className="primary-btn">
                        {isUpdating ? 'Save Changes' : 'Save Movie'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MovieForm;
export default MovieForm;