// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAI from 'openai';
import { Response } from 'node-fetch';

const openai = new OpenAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  test('create: only required params', async () => {
    const responsePromise = openai.beta.threads.runs.create('string', { assistant_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await openai.beta.threads.runs.create('string', {
      assistant_id: 'string',
      additional_instructions: 'string',
      additional_messages: [
        {
          role: 'user',
          content: 'x',
          attachments: [
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
          ],
          metadata: {},
        },
        {
          role: 'user',
          content: 'x',
          attachments: [
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
          ],
          metadata: {},
        },
        {
          role: 'user',
          content: 'x',
          attachments: [
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
            { file_id: 'string', tools: ['file_search', 'code_interpreter'] },
          ],
          metadata: {},
        },
      ],
      instructions: 'string',
      max_completion_tokens: 256,
      max_prompt_tokens: 256,
      metadata: {},
      model: 'gpt-4-turbo',
      response_format: 'none',
      stream: false,
      temperature: 1,
      tool_choice: 'none',
      tools: [{ type: 'code_interpreter' }, { type: 'code_interpreter' }, { type: 'code_interpreter' }],
      top_p: 1,
      truncation_strategy: { type: 'auto', last_messages: 1 },
    });
  });

  test('retrieve', async () => {
    const responsePromise = openai.beta.threads.runs.retrieve('string', 'string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      openai.beta.threads.runs.retrieve('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(OpenAI.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = openai.beta.threads.runs.update('string', 'string', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = openai.beta.threads.runs.list('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      openai.beta.threads.runs.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(OpenAI.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      openai.beta.threads.runs.list(
        'string',
        { after: 'string', before: 'string', limit: 0, order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAI.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = openai.beta.threads.runs.cancel('string', 'string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      openai.beta.threads.runs.cancel('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(OpenAI.NotFoundError);
  });

  test('submitToolOutputs: only required params', async () => {
    const responsePromise = openai.beta.threads.runs.submitToolOutputs('string', 'string', {
      tool_outputs: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitToolOutputs: required and optional params', async () => {
    const response = await openai.beta.threads.runs.submitToolOutputs('string', 'string', {
      tool_outputs: [
        { tool_call_id: 'string', output: 'string' },
        { tool_call_id: 'string', output: 'string' },
        { tool_call_id: 'string', output: 'string' },
      ],
      stream: false,
    });
  });
});
