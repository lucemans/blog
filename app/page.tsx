export default async () => {
    // This fetch will run on the server during `next build`
    const response = await fetch(
        'http://worldtimeapi.org/api/timezone/Europe/Amsterdam',
        { cache: 'reload' }
    );
    const data = await response.json();

    return <main>...{JSON.stringify(data)}</main>;
};
