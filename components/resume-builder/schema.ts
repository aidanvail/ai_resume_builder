import * as z from 'zod';

export const personalInfoSchema = z.object({
  personalDetails: z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must have at least 10 digits"),
    linkedin: z.string().optional().or(z.string().url("Invalid LinkedIn URL")),
    github: z.string().optional().or(z.string().url("Invalid GitHub/Portfolio URL")),
    location: z.string().optional(),
  })
});
export const careerObjectiveSchema = z.object({
    objective: z.string().max(500, "Objective must be less than 500 characters").optional(),
  });

  export const workExperienceSchema = z.object({
    workExperience: z.array(z.object({
      jobTitle: z.string().min(1, "Job Title is required"),
      companyName: z.string().min(1, "Company Name is required"),
      location: z.string().optional(),
      startDate: z.string().min(1, "Start date is required"),
      endDate: z.string().optional(),
      description: z.string().max(2000, "Description must be less than 2000 characters").optional(),
    }))
  });

  export const educationSchema = z.object({
    education: z.array(z.object({
      degree: z.string().min(1, "Degree is required"),
      institution: z.string().min(1, "School/University Name is required"),
      location: z.string().optional(),
      startDate: z.string().min(1, "Start date is required"),
      endDate: z.string().optional(),
      grade: z.string().optional(),
    }))
  });

  export const skillsSchema = z.object({
    skills: z.array(z.object({
      skill: z.string().min(1, "Skill is required"),
      proficiency: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
    }))
  });

  export const projectsSchema = z.object({
    projects: z.array(z.object({
      projectName: z.string().min(1, "Project Name is required"),
      description: z.string().max(1000, "Description must be less than 1000 characters").min(1, "Description is required"),
      link: z.string().optional().or(z.string().url("Invalid URL")),
    }))
  });

  export const languagesSchema = z.object({
    languages: z.array(z.object({
      language: z.string().min(1, "Language is required"),
      proficiency: z.enum(["Basic", "Fluent", "Native"]).optional(),
    }))
  });

  export const certificationsSchema = z.object({
    certifications: z.array(z.object({
      certificationName: z.string().min(1, "Certification Name is required"),
      issuingOrganization: z.string().min(1, "Issuing Organization is required"),
      issueDate: z.string().min(1, "Issue Date is required"),
    }))
  });

  export const steps = [
    { schema: personalInfoSchema, title: "Personal Info" },
    { schema: careerObjectiveSchema, title: "Career Objective" },
    { schema: workExperienceSchema, title: "Work Experience" },
    { schema: educationSchema, title: "Education" },
    { schema: skillsSchema, title: "Skills" },
    { schema: projectsSchema, title: "Projects" },
    { schema: languagesSchema, title: "Languages" },
    { schema: certificationsSchema, title: "Certifications" },
  ];