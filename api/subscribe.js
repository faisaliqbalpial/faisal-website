export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = request.body;
    if (!email) {
        return response.status(400).json({ error: 'Email is required' });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY; // Key must be set in environment variables
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID; // User needs to provide this!

    if (!API_KEY) {
        return response.status(500).json({ error: 'Mailchimp API Key is not configured.' });
    }

    const DATACENTER = API_KEY.split('-')[1];

    if (!AUDIENCE_ID) {
        return response.status(500).json({ error: 'Mailchimp Audience ID is not configured.' });
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    try {
        const fetchResponse = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email_address: email,
                status: "subscribed",
                source: "Website popup", // Custom field or merge tag might be needed, but 'source' isn't a standard top-level field for member creation.
                // We can use 'tags' or 'merge_fields' to indicate source.
                tags: ["Website Popup"],
            }),
        });

        const data = await fetchResponse.json();

        if (fetchResponse.status >= 400) {
            // Check if user is already subscribed
            if (data.title === "Member Exists") {
                return response.status(200).json({ message: "You are already subscribed!" });
            }
            return response.status(400).json({ error: data.detail || "Error subscribing to newsletter." });
        }

        return response.status(201).json({ message: "Successfully subscribed!" });
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
