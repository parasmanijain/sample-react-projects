import { useFetch } from "../hooks/useFetch";

// Using the Custom Hook on a component
export const CustomHookComponent = () => {
    const { data, loading, error } = useFetch<any>('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error && !loading) {
        return <div>Error: {error.message}</div>;
    }

    if (!data && !loading) {
        return <div>No data.</div>;
    }

    return (
        <ol>
            {data.map((post: any) => <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>)}
        </ol>
    );
}