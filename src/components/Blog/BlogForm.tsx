"use client";

import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Quill styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define the types for the section and the blog post
type SectionField = "title" | "imageSrc" | "imageAlt"; // Union type for section fields
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateTimestamp: Timestamp;
  mainImageSrc: string;
  introduction: string;
  category: string;
  sections: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    content: string;
  }[];
  conclusion: string;
};

// Function to format date
const getFormattedDate = () => {
  const now = new Date();
  return now.toLocaleString("es-MX", { dateStyle: "long", timeStyle: "short" });
};

const BlogForm = () => {
  const [formData, setFormData] = useState<BlogPost>({
    slug: "",
    title: "",
    date: "",
    dateTimestamp: Timestamp.fromDate(new Date()),
    mainImageSrc: "",
    introduction: "",
    category: "",
    sections: [{ title: "", imageSrc: "", imageAlt: "", content: "" }],
    conclusion: "",
  });

  // Handle input changes for text fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof BlogPost
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Handle Quill editor changes
  const handleQuillChange = (value: string, sectionIndex?: number) => {
    if (sectionIndex !== undefined) {
      const updatedSections = [...formData.sections];
      updatedSections[sectionIndex].content = value;
      setFormData({ ...formData, sections: updatedSections });
    } else {
      setFormData({ ...formData, conclusion: value });
    }
  };

  // Handle introduction separately
  // Separate handler for Introduction
  const handleIntroductionChange = (value: string) => {
    setFormData({ ...formData, introduction: value });
  };
  // Handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  // Handle section change
  const handleSectionChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    field: SectionField
  ) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = e.target.value; // Use the union type here

    // If the field being updated is "title", also update "imageAlt" with the same value
    if (field === "title") {
      updatedSections[index].imageAlt = e.target.value;
    }

    setFormData({ ...formData, sections: updatedSections });
  };

  // Handle adding new section
  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        { title: "", imageSrc: "", imageAlt: "", content: "" },
      ],
    });
  };

  // Handle removing a section
  const removeSection = (index: number) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      date: getFormattedDate(),
      dateTimestamp: Timestamp.fromDate(new Date()),
    };

    try {
      const response = await fetch("/api/addBlogPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) alert("Blog post uploaded successfully!");
      else alert("Error uploading post.");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload blog post.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:text-black"
    >
      {/* Slug */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Slug:
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => handleChange(e, "slug")}
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Title */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title:
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e, "title")}
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Main Image*/}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Main Image URL:
        </label>
        <input
          type="text"
          value={formData.mainImageSrc}
          onChange={(e) => handleChange(e, "mainImageSrc")}
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Introduction */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Introduction:
        </label>
        <ReactQuill
          value={formData.introduction}
          onChange={(value) => handleIntroductionChange(value)}
          className="bg-white"
        />
      </div>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category:
        </label>
        <select
          value={formData.category}
          onChange={(e) => handleCategoryChange(e)}
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Sports">Sports</option>
          <option value="Culture">Culture</option>
          <option value="NewsUpdates">News & Updates</option>
          <option value="TravelActivities">Travel & Activities</option>
        </select>
      </div>

      {/* Sections */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sections</h3>
        {formData.sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-4 p-4 border border-gray-200 rounded-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Section Title:
              </label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionChange(sectionIndex, e, "title")}
                required
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Section Image URL:
              </label>
              <input
                type="text"
                value={section.imageSrc}
                onChange={(e) =>
                  handleSectionChange(sectionIndex, e, "imageSrc")
                }
                required
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content:
              </label>
              <ReactQuill
                key={sectionIndex}
                value={section.content}
                onChange={(value) => handleQuillChange(value, sectionIndex)} // Correct usage
                className="bg-white"
              />
            </div>

            <button
              type="button"
              onClick={() => removeSection(sectionIndex)}
              className="text-red-500 font-medium hover:text-red-700"
            >
              Remove Section
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSection}
          className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600"
        >
          Add Section
        </button>
      </div>

      {/* Conclusion */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conclusion</h3>
        <ReactQuill
          value={formData.conclusion}
          onChange={(value) => handleQuillChange(value)}
          className="bg-white"
        />
      </div>

      {/* Upload blog post */}
      <button
        type="submit"
        className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600"
      >
        Upload Blog Post
      </button>
    </form>
  );
};

export default BlogForm;
