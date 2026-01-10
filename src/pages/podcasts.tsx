import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import podcastData from '../data/podcasts.json';
import clsx from 'clsx'; // Assuming clsx is available in Docusaurus projects by default

export default function PodcastPage() {
  const {siteConfig} = useDocusaurusContext();
  const [filter, setFilter] = useState('all'); // all, active, dropped
  const [sortConfig, setSortConfig] = useState({ key: 'yearAdded', direction: 'desc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortValue = (podcast, key) => {
      if (key === 'yearAdded') {
          if (podcast.yearAdded === 'Pre-2019') return 2018;
          return parseInt(podcast.yearAdded) || 0;
      }
      return podcast[key];
  };

  const sortedData = [...podcastData]
    .filter(podcast => {
        if (filter === 'all') return true;
        return podcast.state === filter;
    })
    .sort((a, b) => {
        const aValue = getSortValue(a, sortConfig.key);
        const bValue = getSortValue(b, sortConfig.key);

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

  const renderSortIcon = (key) => {
      if (sortConfig.key !== key) return <span style={{opacity: 0.3}}>⇅</span>;
      return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <Layout
      title={`Podcasts`}
      description="List of podcasts I listen to">
      <main className="container margin-vert--lg">
        <h1>Podcasts</h1>
        <p>A tracked list of podcasts I listen to or have listened to.</p>
        
        <div className="margin-bottom--md">
            <button 
                className={clsx('button button--sm margin-right--sm', filter === 'all' ? 'button--primary' : 'button--outline button--secondary')}
                onClick={() => setFilter('all')}>
                All
            </button>
            <button 
                className={clsx('button button--sm margin-right--sm', filter === 'active' ? 'button--primary' : 'button--outline button--secondary')}
                onClick={() => setFilter('active')}>
                Active
            </button>
            <button 
                className={clsx('button button--sm', filter === 'dropped' ? 'button--primary' : 'button--outline button--secondary')}
                onClick={() => setFilter('dropped')}>
                Dropped
            </button>
        </div>

        <div className="table-responsive">
            <table className="table table--striped">
                <thead>
                    <tr>
                        <th style={{cursor: 'pointer'}} onClick={() => handleSort('name')}>Podcast {renderSortIcon('name')}</th>
                        <th style={{cursor: 'pointer'}} onClick={() => handleSort('description')}>Description {renderSortIcon('description')}</th>
                        <th style={{cursor: 'pointer'}} onClick={() => handleSort('state')}>Status {renderSortIcon('state')}</th>
                        <th style={{cursor: 'pointer'}} onClick={() => handleSort('yearAdded')}>Year Added {renderSortIcon('yearAdded')}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((podcast, idx) => (
                        <tr key={idx}>
                            <td>
                                <a href={podcast.url} target="_blank" rel="noopener noreferrer">
                                    {podcast.name}
                                </a>
                                {podcast.isFavorite && (
                                    <span className="badge badge--warning margin-left--xs" title="Favorite">★</span>
                                )}
                            </td>
                            <td>{podcast.description}</td>
                            <td>
                                <span className={clsx('badge', podcast.state === 'active' ? 'badge--success' : 'badge--secondary')}>
                                    {podcast.state}
                                </span>
                            </td>
                            <td>
                                {podcast.yearAdded} 
                                {podcast.yearDropped && <span style={{fontSize: '0.8em', color: 'var(--ifm-color-emphasis-600)'}}> (Dropped {podcast.yearDropped})</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </main>
    </Layout>
  );
}
