// Calls to GCP backend
async function callAgentAPI(data) {
  const response = await fetch('Endpoint>>', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await response.json();
}
