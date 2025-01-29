export function formatTimestamp(createdAt) {
    const now = new Date(); // Current date and time
    const postDate = new Date(createdAt); // Convert createdAt to a Date object
    const diffInMs = now - postDate; // Difference in milliseconds
  
    const diffInSeconds = Math.floor(diffInMs / 1000); // Difference in seconds
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Difference in minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // Difference in hours
    const diffInDays = Math.floor(diffInHours / 24); // Difference in days
  
    // Handle formatting based on the time difference
    if (diffInSeconds < 60) {
      return `${diffInSeconds} sec${diffInSeconds === 1 ? '' : 's'} ago`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min${diffInMinutes === 1 ? '' : 's'} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    } else {
      // Format as a standard date for older posts (e.g., "Jan 25, 2025")
      return postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }