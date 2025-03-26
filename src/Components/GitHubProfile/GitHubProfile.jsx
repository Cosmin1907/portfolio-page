import React, { useState, useEffect } from 'react';
import './GitHubProfile.css';
import { useTranslation } from 'react-i18next';

const GitHubProfile = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    user: null,
    repos: [],
    loading: false,
    error: ''
  });
  const [showRepos, setShowRepos] = useState(false); // State to manage visibility

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
    <div className='github-container'>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>{data.error}</p>}

      {data.user && (
        <div className="github-profile">
          <div className="user-info">
            <i className="fa-brands fa-github"></i> <span>(@
            <a href={data.user.html_url} target="_blank" rel="noopener noreferrer">
              {data.user.login}
            </a>) </span> 
            <p>Repos: {data.user.public_repos}</p>
          </div>
          <p className='show' onClick={() => setShowRepos(!showRepos)} style={{ cursor: 'pointer' }}>
            {t('repos')} <i class="fa-regular fa-hand-point-down"></i>
          </p>
        </div>
      )}

      <div className="repos">
        {showRepos && data.repos.length > 0 && (
          <ul className='show'>
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
    </div>
  );
};

export default GitHubProfile;
