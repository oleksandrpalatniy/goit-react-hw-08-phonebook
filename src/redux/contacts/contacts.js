import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.token;
      token && headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ['Contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({}),
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    createContact: builder.mutation({
      query: contact => ({
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),

    editContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useEditContactMutation,
} = contactsApi;

export const selectContactsResult =
  contactsApi.endpoints.getAllContacts.select();

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://61f04963732d93001778e9b1.mockapi.io/contacts',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getAllContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: idContact => ({
//         url: `/contacts/${idContact}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     createContact: builder.mutation({
//       query: newContact => ({
//         url: '/contacts',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useGetAllContactsQuery,
//   useDeleteContactMutation,
//   useCreateContactMutation,
// } = contactsApi;
