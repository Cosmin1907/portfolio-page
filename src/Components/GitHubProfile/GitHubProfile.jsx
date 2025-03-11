import React, { useState, useEffect } from 'react';
import './GitHubProfile.css';

const GitHubProfile = () => {
  const [data, setData] = useState({
    user: null,
    repos: [],
    loading: false,
    error: ''
  });

  const username = 'Cosmin1907'; // Hardcoded username

  const fetchGitHubInformation = async () => {
    setData({ ...data, loading: true, error: '' });

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: {
              Authorization: `token ${token}`
            }
          }),
          fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
              Authorization: `token ${token}`
            }
          })
        ]);

      if (userResponse.status === 404) {
        throw new Error(`No info found for user ${username}`);
      }

      const user = await userResponse.json();
      const repos = await repoResponse.json();

      setData({ user, repos, loading: false, error: '' });
    } catch (error) {
      setData({ ...data, error: error.message, loading: false });
    }
  };

  useEffect(() => {
    fetchGitHubInformation(); // Fetch data when the component mounts
  }, []); // Empty dependency array = runs only once on mount

  return (
    <div>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>{data.error}</p>}

      {data.user && (
        <div>
          <h2>
            {data.user.name} (@
            <a href={data.user.html_url} target="_blank" rel="noopener noreferrer">
              {data.user.login}
            </a>)
          </h2>
          <img src={data.user.avatar_url} alt={data.user.login} width="80" height="80" />
          <p>
            Followers: {data.user.followers} - Following: {data.user.following} <br />
            Repos: {data.user.public_repos}
          </p>
        </div>
      )}

      {data.repos.length > 0 && (
        <ul>
          {data.repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubProfile;
