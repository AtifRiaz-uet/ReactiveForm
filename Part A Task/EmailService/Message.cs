using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace EmailService
{
    public class Message
    {
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public MemoryStream Attachments { get; set; }

        public Message(IEnumerable<string> to, string subject, string content, MemoryStream attachments)
        {
            To = new List<MailboxAddress>();
            Subject = subject;
            Content = content;
            Attachments = attachments;
        }
    }
}
