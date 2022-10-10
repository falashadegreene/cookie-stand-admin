import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth';

export default function useResource() {

    // const { tokens, logout } = useAuth();

    // const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function handleError(err) {
        console.error(err);
        logout();
    }

//     return {
//         // resources: data,
//         error,
//         loading: tokens && !error && !data,
//         createResource,
//         deleteResource,
//     };
 }