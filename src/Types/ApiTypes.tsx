export interface ApiResponse {
  success: boolean;
  users: UserType[]; // Replace UserType with the actual type of your users
  groups: GroupType[]; // Replace GroupType with the actual type of your groups
}

// Define interfaces for UserType and GroupType
interface UserType {
  id: string;
  name: string;
  // Add other properties based on your actual data structure
}

interface GroupType {
  id: string;
  groupName: string;
  role: string;
  createdOn: string;
  status: string;
  // Add other properties based on your actual data structure
}
