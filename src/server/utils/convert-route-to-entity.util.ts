const mapping: Record<string, string> = {
  blogs: 'blog',
  contents: 'content',
  designs: 'design',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
