import axios from 'axios';

const baseUrl = `http://localhost:3001/anecdotes`;

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

const createNewAnecdote = async (content) => {
  const anecdote = {
    content,
    votes: 0,
  };

  const response = await axios.post(baseUrl, anecdote);

  return response.data;
};

const updateLikesOnAnecdote = async (anecdote) => {
  const updatedUrl = `${baseUrl}/${anecdote.id}`;

  const response = await axios.put(updatedUrl, anecdote);

  return response.data;
};

export default { getAllAnecdotes, createNewAnecdote, updateLikesOnAnecdote };
