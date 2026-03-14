import React, { useState, useMemo, type JSX } from 'react';
import MDXContent from '@theme-original/MDXContent';
import type MDXContentType from '@theme/MDXContent';
import type {WrapperProps} from '@docusaurus/types';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

type Props = WrapperProps<typeof MDXContentType>;

const YEARLY_REVIEW_ANCHORS = [
  'introduction',
  'goals-achieved-this-year',
  'major-life-goals',
  'yearly-goals',
  'projects',
  'home-projects',
  'outdoor-projects',
  'upgraded-home-network',
  'single-sign-on-sso',
  'security-system',
  'tracking-sheets-upgrades',
  'website-updates',
  'upgraded-smart-tv',
  'clickup-migration',
  'carbonation-system',
  'soda-kegerator',
  'financial-planner',
  'personal-side-projects',
  'reading-materials-this-year',
  'podcasts',
  'cities-visited',
  'places-visited',
  'financial-state',
  'mood-summary',
  'activity-summary',
  'month-by-month-highlights',
  'summary',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
  'big-goals-achieved-this-year',
  'goals-not-achieved-this-year',
  'find-a-life-partner',
  'find-a-wife',
  'goals-with-some-progress',
  'travel-to-the-six-continents-excluding-antarctica-',
  'custom-local-llms-large-language-models',
  'class-tutor',
  'private-gpt',
  'ai-song-covers',
  'upgraded-patent-prints',
  'personal-website-redesignrewrite',
  'pureframe',
  'cloud-services-wip',
  'meetingheroai',
  'projects-that-didnt-go-anywhere',
  'dating-profile',
  'workouts',
  'sisters-engagement-and-wedding-preparation',
  'family-side-quests',
  'duolingo',
  'car-chaos',
  'car-enhancements',
  'cellphones-shinanigans',
  'parentss-health-and-doctors',
  'fleeter',
  'my-homeserver-services',
  'renting-my-house',
  'cleaning-out-the-trash-the-tenants-left',
  'job-hunting',
  'djing',
  'liquor-store',
  'my-health',
  'travel-trips-planning',
  'tasksproductivity-app',
  'recaps',
  'youtube',
  'chatgpt',
  'complete-the-estate-plan',
  'have-an-estate-plan',
  'smart-business-cards',
  'health-and-fitness',
  'parents-health',
  'new-pc',
  'cloud-storage-cleanup',
  'docker-images-cleanup',
  's-001',
  'photoprism',
  'crypto-taxes-tracker',
  'new-phone',
  'sisters-wedding-preparation',
  'dj-ing',
  'music-studio-and-soundboard',
  'stable-diffusion',
  'laptop-display-replacement',
  'homeowners-association-board-issues',
  'homeowners-policies',
  'garage-door-improvements',
  'volunteering',
  'aramic-class',
  'ac-surge-protector',
  'crypto-taxes-software',
  'golden-pothos',
  'build-a-solid-investment-portfolio',
  'car-upgrades',
  'my-personal-smart-media-center-upgrades',
  'professional-video-edit-for-my-sister',
  'revamped-authorization-system-for-coursekey',
  'gazebo-upgrades',
  'google-photos-migration',
  'my-website-upgrades',
  'custom-smart-nfc-business-cards',
  'sell-coursekey',
];

function PasswordProtectedContent({ password, children }: { password: string | undefined; children: JSX.Element }): JSX.Element {
  const [attemptedPass, setAttemptedPass] = useState<string>();
  const brokenLinks = useBrokenLinks();

  const isBrowser = typeof window !== 'undefined';
  let browserPass = null;

  if (isBrowser) {
    const urlParams = new URLSearchParams(window.location.search);
    browserPass = urlParams.get('pass');
  }

  const isLocked = password && password.toString() !== attemptedPass && password.toString() !== browserPass;

  const hasPassword = !!password;

  if (hasPassword) {
    YEARLY_REVIEW_ANCHORS.forEach((anchor) => {
      brokenLinks.collectAnchor(anchor);
    });
  }

  if (isLocked) {
    return (
      <input
        type="text"
        className="passwordProtectedDoc"
        placeholder="Enter the password"
        onChange={(e) => setAttemptedPass(e.target.value)}
      />
    );
  }

  return children;
}

export default function MDXContentWrapper(props: Props): JSX.Element {
  const password: string | undefined = (() => {
    const child = props.children;
    if (typeof child === 'object' && child !== null && 'type' in child) {
      const element = child as { type?: { frontMatter?: { password?: string } } };
      return element.type?.frontMatter?.password;
    }
    return undefined;
  })();

  return (
    <PasswordProtectedContent password={password}>
      <MDXContent {...props} />
    </PasswordProtectedContent>
  );
}
