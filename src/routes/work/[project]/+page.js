export const prerender = true;

export const load = ({ params }) => {
  return {
    projectId: params.project
  }
}