<?php

declare(strict_types=1);

namespace App\Services\AI;

use App\Contracts\Services\AI;
use App\Enums\ChatMessageRole;
use OpenAI\Contracts\ClientContract;

final readonly class OpenAI implements AI
{
    /**
     * Create a new instance.
     */
    public function __construct(private ClientContract $client)
    {
        //
    }

    /**
     * Checks if the given message does not make the AI agent off-topic.
     */
    public function isOnTopic(string $message): bool
    {
        $result = $this->client->chat()->create([
            'model' => 'gpt-4o-mini',
            'messages' => [
                [
                    'role' => ChatMessageRole::System, 'content' => <<<'EOT'
                        You are a validation agent for ThriveHelp, a mental wellbeing support platform.
                        Your job is to determine if a user message would make the assistant go off-topic
                        based on the original system instruction.

                        The original assistant is a compassionate guide for mental wellbeing.
                        They help users explore feelings, identify patterns of stress or anxiety,
                        and offer supportive guidance and coping strategies.

                        Given a user prompt, return one of the following strings exactly:

                        - "on_topic" — if the message is relevant to mental health, emotions, wellbeing, stress, anxiety, mood, coping, daily routines, sleep, relationships, or seeking support.
                        - "off_topic" — if the message is clearly unrelated: technical support, entertainment, jokes, spam, or completely unrelated topics like politics, sports scores, or weather forecasts (unless connected to mood).

                        Only return the exact string. Do not explain. Do not include punctuation or formatting.

                        Important context: The assistant is NOT a crisis service. If a user expresses immediate harm to self/others, the system will handle it separately. Do NOT flag crisis messages as off-topic.

                        Please only flag messages that are clearly off-topic. If the message is ambiguous or could relate to mental wellbeing (e.g., "I had a bad day"), assume it is on-topic.

                        E.g: if the user says "hello", "I'm feeling anxious", or "how does this work?", the response should be "on_topic".
                    EOT,
                ], [
                    'role' => ChatMessageRole::User, 'content' => $message,
                ],
            ],
        ]);

        return match ($result->choices[0]->message->content) {
            'on_topic' => true,
            default => false,
        };
    }

    /**
     * Generate a chat response based on the conversation history.
     *
     * @param  array<int, array{role: string, content: string}>  $messages
     */
    public function chat(array $messages): string
    {
        $result = $this->client->chat()->create([
            'model' => 'gpt-4o',
            'messages' => $messages,
        ]);

        return (string) $result->choices[0]->message->content;
    }
}
