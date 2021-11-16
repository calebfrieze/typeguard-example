import { Resource } from "../models/Resource";

export const resources: Resource[] = [
  {
    name: "Test resource 1",
    available: true,
    count: 10,
    notes: [
      {
        subject: "This is a test note",
        message: "This resource is a test resource used for testing."
      },
      {
        subject: "This is also a test note",
        message: "We are going to use this data to test typeguards"
      }
    ]
  },
  {
    name: "Test resource 2",
    available: false,
    count: 0,
    notes: [
      {
        subject: "This is a test note for resource 2",
        message: "This resource is a test resource used for testing, except this is the only note"
      }
    ]
  }
];
