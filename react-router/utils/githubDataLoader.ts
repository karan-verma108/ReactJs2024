const githubApiUrl: string = import.meta.env.VITE_GITHUB_API ?? '';
const githubUserName: string = import.meta.env.VITE_GITHUB_USERNAME ?? '';

export const githubDataLoader = async () => {
  const response = await fetch(`${githubApiUrl}/${githubUserName}`);
  return response.json();
};

export default githubDataLoader;
